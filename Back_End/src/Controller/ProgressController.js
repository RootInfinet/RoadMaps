const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getProgressSummary = async (req, res) => {
  try {
    const roadmapId = parseInt(req.params.roadmapId, 10);
    
    const enrollment = await prisma.userEnrollment.findUnique({
      where: {
        userId_roadmapId: {
          userId: req.user.id,
          roadmapId: roadmapId
        }
      }
    });

    if (!enrollment) {
      return res.status(200).json({ completedSteps: [] });
    }

    return res.status(200).json({ completedSteps: enrollment.completedSteps });
  } catch (error) {
    console.error("Error in getProgressSummary:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const toggleStep = async (req, res) => {
  try {
    const roadmapId = parseInt(req.params.roadmapId, 10);
    const { stepId, isDone } = req.body;

    if (Number.isNaN(roadmapId) || !stepId) {
      return res.status(400).json({ message: "roadmapId and stepId are required" });
    }

    let enrollment = await prisma.userEnrollment.findUnique({
      where: {
        userId_roadmapId: { 
          userId: req.user.id, 
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