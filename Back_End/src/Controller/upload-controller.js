const fs = require("fs");
const path = require("path");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const redisClient = require("../redisClient");

const UPLOAD_ROOT = path.resolve(process.cwd(), "uploads");

function getValidatedUploadPath(filePath) {
  if (typeof filePath !== "string" || filePath.trim() === "") {
    throw new Error("Invalid upload path.");
  }

  return path.resolve(filePath);
}

async function uploadRoadmap(req, res) {
  const client = await redisClient.getClient();
  let safeFilePath = null;
  try {
    if (!req.file || !req.file.path) {
      return res.status(400).json({ error: "No file uploaded!" });
    }

    safeFilePath = getValidatedUploadPath(req.file.path);
    const rawData = fs.readFileSync(safeFilePath, "utf8");
    const parsedData = JSON.parse(rawData);

    let roadmapTitle =
      parsedData.roadmapTitle ||
      parsedData.title ||
      "Front-End Development Roadmap";
    let roadmapDescription =
      parsedData.description || "Structured learning path.";
    let allStepsToCreate = [];

    const phases = Array.isArray(parsedData)
      ? parsedData
      : parsedData.phases || parsedData.roadmap || [];
for (const phase of phases) {
      const stepsArray = phase.steps || phase.Steps || [];

      for (const step of stepsArray) {
        let resNames = [];
        let resLinks = [];

        if (step.resources) {
          if (Array.isArray(step.resources)) {
            resNames = step.resources.map(r => (r.name ? r.name.replace(/\0/g, "") : ""));
            resLinks = step.resources.map(r => (r.link ? r.link.replace(/\0/g, "") : ""));
          } else if (typeof step.resources === "object") {
            if (step.resources.name) resNames.push(step.resources.name.replace(/\0/g, ""));
            if (step.resources.link) resLinks.push(step.resources.link.replace(/\0/g, ""));
          }
        }

        allStepsToCreate.push({
          title: step.title ? step.title.replace(/\0/g, "") : null,
          description: step.description ? step.description.replace(/\0/g, "") : null,
          content: step.content ? step.content.replace(/\0/g, "") : null,
          notes: step.notes ? step.notes.replace(/\0/g, "") : null,
          resourcesName: resNames.length > 0 ? resNames.join(", ") : null,
          resoursesLink: resLinks.length > 0 ? resLinks.join(", ") : null,
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
          create: allStepsToCreate,
        },
      },
      include: {
        steps: true,
      },
    });

    if (safeFilePath && fs.existsSync(safeFilePath)) {
      fs.unlinkSync(safeFilePath);
    }

    await client.del("available_roadmaps_all");

    return res.status(201).json({
      message: "Roadmap and steps uploaded successfully!",
      totalStepsSaved: newRoadmap.steps.length,
      roadmap: newRoadmap,
    });
  } catch (error) {
    console.error("🔥 ERROR CAUGHT:", error);

    if (safeFilePath && fs.existsSync(safeFilePath)) {
      try {
        fs.unlinkSync(safeFilePath);
      } catch (cleanupError) {
        console.error("Cleanup error:", cleanupError.message);
      }
    }

    return res
      .status(500)
      .json({ error: error.message || "Internal server error during upload." });
  }
}

module.exports = { uploadRoadmap };
