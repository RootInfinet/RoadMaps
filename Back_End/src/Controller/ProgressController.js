const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const  redisClient  = require('../redisClient');
const getProgressSummary = async (req, res) => {
  const client = await redisClient.getClient();

  try {
    const roadmapId = parseInt(req.params.roadmapId, 10);
    const userId = req.user.id;
    const cacheKey = `progress_summary:${userId}:${roadmapId}`;

    const cachedData = await client.get(cacheKey);
    if (cachedData) {
      console.log("Serving progress summary from Redis Cache 🚀");
      return res.status(200).json(JSON.parse(cachedData));
    }

    const enrollment = await prisma.userEnrollment.findUnique({
      where: {
        userId_roadmapId: {
          userId: userId,
          roadmapId: roadmapId
        }
      }
    });

    if (!enrollment) {
      const defaultData = { completedSteps: [] };
      return res.status(200).json(defaultData);
    }

    const responseData = { completedSteps: enrollment.completedSteps };

    await client.setEx(cacheKey, 3600, JSON.stringify(responseData));

    return res.status(200).json(responseData);
  } catch (error) {
    console.error("Error in getProgressSummary:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const toggleStep = async (req, res) => {
  const client = await redisClient.getClient();
  try {
    const roadmapId = parseInt(req.params.roadmapId, 10);
    const { stepId, isDone } = req.body;
    const userId = req.user.id;

    if (Number.isNaN(roadmapId) || !stepId) {
      return res.status(400).json({ message: "roadmapId and stepId are required" });
    }

    let enrollment = await prisma.userEnrollment.findUnique({
      where: {
        userId_roadmapId: { 
          userId: userId, 
          roadmapId: roadmapId 
        },
      },
    });

    if (!enrollment) {
      return res.status(404).json({ message: "User is not enrolled in this roadmap" });
    }

    let completed = Array.isArray(enrollment.completedSteps)
      ? [...enrollment.completedSteps]
      : [];

    if (isDone) {
      if (!completed.includes(stepId)) completed.push(stepId);
    } else {
      completed = completed.filter((id) => id !== stepId);
    }

    const updated = await prisma.userEnrollment.update({
      where: { id: enrollment.id },
      data: {
        completedSteps: completed,
        status: completed.length > 0 ? "in-progress" : "not-started",
      },
    });

    await client.del(`progress_summary:${userId}:${roadmapId}`);
    await client.del(`user_roadmaps:${userId}`);

    return res.status(200).json({
      completedSteps: updated.completedSteps,
      completedCount: updated.completedSteps.length,
      status: updated.status
    });

  } catch (error) {
    console.error("Error in toggleStep:", error);
    return res.status(500).json({ message: "Error updating progress" });
  }
};

module.exports = { getProgressSummary, toggleStep };