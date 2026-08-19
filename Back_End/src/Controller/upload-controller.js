const fs = require('fs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function uploadRoadmap(req, res) {
    try {
        const rawData = fs.readFileSync(req.file.path, 'utf8');
        const parsedData = JSON.parse(rawData);

let roadmapTitle = parsedData.roadmapTitle || parsedData.title || "Front-End Development Roadmap";
        let roadmapDescription = parsedData.description || "Structured learning path.";
        let allStepsToCreate = [];

        const phases = Array.isArray(parsedData) ? parsedData : [];

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

        return res.status(201).json({
            message: "Roadmap and steps uploaded successfully!",
            totalStepsSaved: newRoadmap.steps.length,
            roadmap: newRoadmap
        });

    } catch (error) {
        console.error("🔥 ERROR CAUGHT:", error);
        return res.status(500).json({ error: error.message });
    }
}

module.exports = { uploadRoadmap };