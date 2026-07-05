const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

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
    console.log(error);
console.error(error); 
res.status(500).json({ message: "Internal server error" });  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid email or password" });

    const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      httpOnly: true,
secure:true,
      sameSite: "none",
    });

    return res.status(200).json({
      message: "Login Successful",
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (error) {
console.error(error);
res.status(500).json({ message: "Internal server error" });  }
};

const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
  secure: true,   
  sameSite: 'none', 
  expires: new Date(0)
  });
  return res.status(200).json({ message: "Logged out successfully" });
};

const getMe = async (req, res) => {
  return res.status(200).json({ user: req.user });
};

const updateUser = async (req, res) => {
  const { name, oldPassword, newPassword } = req.body;
  const userId = req.user.id;

  try {
    const data = { name };

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data,
      select: { id: true, name: true, email: true },
    });

    res.status(200).json({ user: updatedUser });
  } catch (error) {
console.error(error); 
res.status(500).json({ message: "Internal server error" });  }
};

const getMyRoadmaps = async (req, res) => {
  try {
    const enrollments = await prisma.userEnrollment.findMany({
      where: { userId: req.user.id },
      orderBy: { enrolledAt: "desc" },
    });

    const roadmaps = enrollments.map((e) => {
      const completed = Array.isArray(e.completedSteps) ? e.completedSteps : [];
      return {
        id: e.id,
        roadmapId: e.roadmapId,
        title: "Front-End Development (Security By Design)", 
        status: e.status,
        completedSteps: completed,
        completedCount: completed.length,
        enrolledAt: e.enrolledAt,
      };
    });

    return res.status(200).json({ roadmaps });
  } catch (error) {
    console.error("Error fetching roadmaps:", error);
    return res.status(500).json({ message: "Error fetching roadmaps" });
  }
};

const enrollInRoadmap = async (req, res) => {
  const userId = req.user.id;
  const { roadmapId } = req.body;

  if (!roadmapId) {
    return res.status(400).json({ message: "Roadmap ID is required" });
  }

  try {
    const cleanRoadmapId = parseInt(roadmapId, 10);

    if (Number.isNaN(cleanRoadmapId)) {
      return res.status(400).json({ message: "Invalid Roadmap ID format" });
    }

    await prisma.roadmap.upsert({
      where: { id: cleanRoadmapId },
      create: {
        id: cleanRoadmapId,
        title: "Front-End Development (Security By Design)",
        description: "Build a simple personal Portfolio page using HTML fundamentals.",
      },
      update: {}, 
    });

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

    return res.status(200).json({
      message: "Enrolled successfully",
      enrollment,
    });
  } catch (error) {
    console.error("Enrollment Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  register,
  login,
  logout,
  getMe,
  updateUser,
  getMyRoadmaps,
  enrollInRoadmap,
};