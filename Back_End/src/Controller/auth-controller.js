const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const prisma = require('../prisma');
const  redisClient  = require('../redisClient');
const GetProjects = async (req, res) => {
  const client = await redisClient.getClient();
  try {
    const { status } = req.query; 
    const cacheKey = `admin_projects:${status || 'all'}`;

    const cachedData = await client.get(cacheKey);
    if (cachedData) {
      console.log("Serving admin projects from Redis Cache 🚀");
      return res.status(200).json(JSON.parse(cachedData));
    }

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

    const responseData = {
      success: true,
      count: projects.length,
      data: projects
    };

    await client.setEx(cacheKey, 600, JSON.stringify(responseData));

    return res.status(200).json(responseData);

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
  const client = await redisClient.getClient();
  try {
    const { id, status } = req.body; 

    const updatedProject = await prisma.projectSubmission.update({ 
      where: { id: Number(id) },
      data: { status: status }
    });


    await client.del('admin_projects:all');
    await client.del('admin_projects:PENDING');
    await client.del('admin_projects:APPROVED');
    await client.del('admin_projects:REJECTED');

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
};