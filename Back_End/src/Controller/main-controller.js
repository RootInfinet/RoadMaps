const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const  redisClient  = require('../redisClient');
const register = async (req, res) => {

  try {
    const { email, password, name } = req.body;

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ message: "The User Is already exist" });
    }

    const hashedpassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: { email, name, password: hashedpassword },
    });

    res.status(200).json({
      message: `User Created Successfully. Welcome ${name} to RoadMap`,
    });
  } catch (error) {
    console.error(error); 
    res.status(500).json({ message: "Internal server error" });  
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
        const token = jwt.sign(
            { userId: "admin-id", email: email, role: 'admin' }, 
            process.env.SECRET_KEY, 
            { expiresIn: '1h' }
        );
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
        });
        return res.status(200).json({ 
          user:{
            message: "Admin access granted", 
            role: 'admin', 
          }
        });
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid email or password" });

    const token = jwt.sign({ userId: user.id, role: user.role }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    return res.status(200).json({
      message: "Login Successful",
      user: { id: user.id, name: user.name, email: user.email, role: user.role },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });  
  }
};

const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: false,   
    sameSite: 'none', 
    expires: new Date(0)
  });
  return res.status(200).json({ message: "Logged out successfully" });
};

const getMe = async (req, res) => {
  return res.status(200).json({ user: req.user });
};

const getMyRoadmaps = async (req, res) => {
  const client = await redisClient.getClient();
  const cacheKey = `user_roadmaps:${req.user.id}`;

  try {
    const cachedData = await client.get(cacheKey);
    if (cachedData) {
      console.log("Serving user roadmaps from Redis Cache 🚀");
      return res.status(200).json({ roadmaps: JSON.parse(cachedData) });
    }

    const enrollments = await prisma.userEnrollment.findMany({
      where: { userId: req.user.id },
      include: {
        roadmap: true, 
      },
      orderBy: { enrolledAt: "desc" },
    });

    const roadmaps = enrollments.map((e) => {
      const completed = Array.isArray(e.completedSteps) ? e.completedSteps : [];
      return {
        id: e.id,
        roadmapId: e.roadmapId,
        title: e.title, 
        description: e.roadmap?.description || "",
        status: e.status,
        completedSteps: completed,
        completedCount: completed.length,
        enrolledAt: e.enrolledAt,
      };
    });

    await client.setEx(cacheKey, 1800, JSON.stringify(roadmaps)); 

    return res.status(200).json({ roadmaps });
  } catch (error) {
    console.error("Error fetching roadmaps:", error);
    return res.status(500).json({ message: "Error fetching roadmaps" });
  }
};

const enrollInRoadmap = async (req, res) => {
  const userId = req.user.id;
  const { roadmapId } = req.body;
const client = await redisClient.getClient();

  if (!roadmapId) {
    return res.status(400).json({ message: "Roadmap ID is required" });
  }

  try {
    const cleanRoadmapId = parseInt(roadmapId, 10);

    if (Number.isNaN(cleanRoadmapId)) {
      return res.status(400).json({ message: "Invalid Roadmap ID format" });
    }

    const roadmap = await prisma.roadmap.findUnique({
      where: { id: cleanRoadmapId },
    });

    if (!roadmap) {
      return res.status(404).json({ message: "Roadmap not found" });
    }

    const enrollment = await prisma.userEnrollment.upsert({
      where: {
        userId_roadmapId: { userId, roadmapId: cleanRoadmapId },
      },
      create: {
        userId,
        roadmapId: cleanRoadmapId,
        status: "in-progress",
        completedSteps: [],
      },
      update: {},
    });

    await client.del(`user_roadmaps:${userId}`);

    return res.status(200).json({
      message: "Enrolled successfully",
      enrollment,
    });
  } catch (error) {
    console.error("Enrollment Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const submitProjects = async (req, res) => {
  const client = await redisClient.getClient();

  try {
    const { roadmapId, projects } = req.body;
    const userId = req.user.id;
    
    if (!userId || !roadmapId || !projects || !Array.isArray(projects) || projects.length === 0) {
      return res.status(400).json({ 
        success: false, 
        message: "User ID, Roadmap ID, and projects are required!" 
      });
    }

    const user = await prisma.user.findUnique({ where: { id: Number(userId) } });
    const roadmap = await prisma.roadmap.findUnique({ where: { id: Number(roadmapId) } });

    if (!user || !roadmap) {
      return res.status(404).json({ success: false, message: "User or Roadmap not found!" });
    }

    let enrollment = await prisma.userEnrollment.findUnique({
      where: {
        userId_roadmapId: {
          userId: Number(userId),
          roadmapId: Number(roadmapId)
        }
      }
    });

    if (!enrollment) {
      enrollment = await prisma.userEnrollment.create({
        data: {
          userId: Number(userId),
          roadmapId: Number(roadmapId),
          status: "in-progress"
        }
      });
    }

    const projectsData = projects.map(proj => ({
      enrollmentId: enrollment.id,
      projectTitle: proj.projectTitle || "Graduation Project",
      projectUrl: proj.projectUrl,
      status: "pending"
    }));

    await prisma.projectSubmission.createMany({
      data: projectsData
    });

    await client.del(`user_roadmaps:${userId}`);

    return res.status(201).json({ 
      success: true, 
      message: "Projects submitted successfully and ready for review!" 
    });

  } catch (error) {
    console.error("Error in submitProjects:", error);
    return res.status(500).json({ 
      success: false, 
      message: "Internal Server Error",
      error: error.message 
    });
  }
};

const GetAvailableRoadmaps = async (req, res) => {
  const client = await redisClient.getClient();
  const cacheKey = "available_roadmaps_all";

  try {
    const cachedData = await client.get(cacheKey);
    if (cachedData) {
      console.log("Serving available roadmaps from Redis Cache 🚀");
      return res.status(200).json({ roadmaps: JSON.parse(cachedData) });
    }

    const roadmaps = await prisma.roadmap.findMany();

    await client.setEx(cacheKey, 3600, JSON.stringify(roadmaps));

    return res.status(200).json({ roadmaps });
  } catch (error) {
    console.error("Error fetching available roadmaps:", error);
    return res.status(500).json({ message: "Error fetching available roadmaps" });
  }
};

const getSteps = async (req, res) => {
  const client = await redisClient.getClient();
  const { id } = req.params;
  const cacheKey = `roadmap_steps:${id}`;

  try {
    const cachedData = await client.get(cacheKey);
    if (cachedData) {
      console.log("Serving steps from Redis Cache 🚀");
      return res.status(200).json({ steps: JSON.parse(cachedData) });
    }

    const steps = await prisma.step.findMany({
      where: { 
        roadmapId: Number(id) 
      }
    });

    if (!steps || steps.length === 0) {
      return res.status(404).json({ message: "No steps found for this roadmap" });
    }

    await client.setEx(cacheKey, 3600, JSON.stringify(steps));

    return res.status(200).json({ steps });
  } catch (error) {
    console.error("Error fetching steps:", error);
    return res.status(500).json({ message: "Error fetching steps" });
  }
};

module.exports = {
  register,
  login,
  logout,
  getMe,
  getMyRoadmaps,
  enrollInRoadmap,
  submitProjects,
  GetAvailableRoadmaps,
  getSteps
};