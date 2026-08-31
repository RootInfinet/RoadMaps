const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const  redisClient  = require('../redisClient');

const UPLOAD_ROOT = path.resolve(process.cwd(), 'uploads');

function getValidatedUploadPath(filePath) {
    if (typeof filePath !== 'string' || filePath.trim() === '') {
        throw new Error('Invalid upload path.');
    }

    const resolvedPath = path.resolve(filePath);
    const relativePath = path.relative(UPLOAD_ROOT, resolvedPath);

    if (relativePath.startsWith('..') || path.isAbsolute(relativePath)) {
        throw new Error('Unsafe upload path.');
    }

    return resolvedPath;
}

async function uploadRoadmap(req, res) {
    const client = await redisClient.getClient();
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded!" });
        }

        const safeFilePath = getValidatedUploadPath(req.file.path);
        const rawData = fs.readFileSync(safeFilePath, 'utf8');
        const parsedData = JSON.parse(rawData);

        let roadmapTitle = parsedData.roadmapTitle || parsedData.title || "Front-End Development Roadmap";
        let roadmapDescription = parsedData.description || "Structured learning path.";
        let allStepsToCreate = [];

        const phases = Array.isArray(parsedData) 
            ? parsedData 
            : (parsedData.phases || parsedData.roadmap || []);

        for (const phase of phases) {
            const stepsArray = phase.steps || phase.Steps || [];

            for (const step of stepsArray) {
                allStepsToCreate.push({
                    title: step.title || "Untitled Step",
                    description: step.description || step.target || "",
                    content: step.assignment || "",
                    notes: step.notes || ""
                });
            }
        }

        console.log("🔥 Total Steps Extracted from JSON:", allStepsToCreate.length);

        const newRoadmap = await prisma.roadmap.create({
            data: {
                title: roadmapTitle,
                description: roadmapDescription,
                isPremium: false,
                steps: {
                    create: allStepsToCreate
                }
            },
            include: {
                steps: true
            }
        });

        if (fs.existsSync(safeFilePath)) {
            fs.unlinkSync(safeFilePath);
        }

        await client.del("available_roadmaps_all");

        return res.status(201).json({
            message: "Roadmap and steps uploaded successfully!",
            totalStepsSaved: newRoadmap.steps.length,
            roadmap: newRoadmap
        });

    } catch (error) {
        console.error("🔥 ERROR CAUGHT:", error);
        
        if (req.file && req.file.path) {
            try {
                const safeFilePath = getValidatedUploadPath(req.file.path);
                if (fs.existsSync(safeFilePath)) {
                    fs.unlinkSync(safeFilePath);
                }
            } catch (cleanupError) {
                console.error("Failed to safely clean up uploaded file:", cleanupError.message);
            }
        }

        return res.status(500).json({ error: error.message });
    }
}

module.exports = { uploadRoadmap };