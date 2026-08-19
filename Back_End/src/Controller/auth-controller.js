const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const GetProjects = async (req, res) => {
  try {
    
    const { status } = req.query; 

    const projects = await prisma.projectSubmission.findMany({
      where: status ? { status: status } : {}, 
      include: {
        enrollment: {
          include: {
            user: {
              select: { id: true, name: true, email: true } 
            },
            roadmap: {
              select: { id: true, title: true } 
            }
          }
        }
      },
      orderBy: {
        submittedAt: 'desc' 
      }
    });

    return res.status(200).json({
      success: true,
      count: projects.length,
      data: projects
    });

  } catch (error) {
    console.error("Error in GetProjects for Admin:", error);
    return res.status(500).json({ 
      success: false, 
      message: "Internal Server Error",
      error: error.message 
    });
  }
};
const updateprojectsstate = async (req, res) => { 
  try {
    const { id, status } = req.body; 

    const updatedProject = await prisma.projectSubmission.update({ 
      where: { 
        id: Number(id)
      },
      data: { 
        status: status 
      }
    });

    return res.status(200).json({
      message: "Project Status Updated Successfully",
      project: updatedProject
    });

  } catch (error) {
    console.error("Error updating status:", error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  GetProjects,
  updateprojectsstate,
}