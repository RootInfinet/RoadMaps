const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const  redisClient  = require('../redisClient');
const getProgressSummary = async (req, res) => {
  const client = await redisClient.getClient();

  try {
    const UserId = req.user?.id || req.user?.userId;
    
    if (!UserId) {
      return res.status(401).json({ message: "Unauthorized: User ID is missing" });
    }

    const userId = Number(UserId);
    const roadmapId = parseInt(req.params.roadmapId, 10);
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
  try {
     const userId = req.user?.userId || req.user?.id;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const roadmapId = parseInt(req.params.roadmapId, 10);
    const { stepId, isDone } = req.body;

    if (!roadmapId || !stepId) {
      return res.status(400).json({ message: "roadmapId and stepId are required" });
    }

    let enrollment = await prisma.userEnrollment.findUnique({
      where: {
        userId_roadmapId: {
          userId: userId,
          roadmapId: roadmapId
        }
      }
    });

    if (!enrollment) {
      enrollment = await prisma.userEnrollment.create({
        data: {
          userId: userId,
          roadmapId: roadmapId,
          status: "in-progress",
          completedSteps: [stepId]
        }
      });
    } else {
      let completedSteps = Array.isArray(enrollment.completedSteps) ? [...enrollment.completedSteps] : [];
      
      if (isDone && !completedSteps.includes(stepId)) {
        completedSteps.push(stepId);
      } else if (!isDone) {
        completedSteps = completedSteps.filter(id => id !== stepId);
      }

      enrollment = await prisma.userEnrollment.update({
        where: {
          userId_roadmapId: {
            userId: userId,
            roadmapId: roadmapId
          }
        },
        data: { completedSteps }
      });
    }

    const client = await redisClient.getClient();
    await client.del(`progress_summary:${userId}:${roadmapId}`);

    return res.status(200).json({ success: true, completedSteps: enrollment.completedSteps });
  } catch (error) {
    console.error("Error in toggleStep:", error);
    return res.status(500).json({ message: "Error updating progress" });
  }
};

module.exports = { getProgressSummary, toggleStep };