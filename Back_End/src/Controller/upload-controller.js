const fs = require('fs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const  redisClient  = require('../redisClient');
async function uploadRoadmap(req, res) {
    const client = await redisClient.getClient();
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded!" });
        }

        const rawData = fs.readFileSync(req.file.path, 'utf8');
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

        if (fs.existsSync(req.file.path)) {
            fs.unlinkSync(req.file.path);
        }

        await client.del("available_roadmaps_all");

        return res.status(201).json({
            message: "Roadmap and steps uploaded successfully!",
            totalStepsSaved: newRoadmap.steps.length,
            roadmap: newRoadmap
        });

    } catch (error) {
        console.error("🔥 ERROR CAUGHT:", error);
        
        if (req.file && req.file.path && fs.existsSync(req.file.path)) {
            fs.unlinkSync(req.file.path);
        }

        return res.status(500).json({ error: error.message });
    }
}

module.exports = { uploadRoadmap };