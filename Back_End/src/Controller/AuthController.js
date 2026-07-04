const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const register = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    const existingUser = await prisma.user.findUnique({
      where: { email: email },
    });

    if (existingUser) {
      return res.status(400).json({ message: "The User Is already exist" });
    }

    const salt = 10;
    const hashedpassword = await bcrypt.hash(password, salt);

    const user = await prisma.user.create({
      data: {
        email: email,
        name: name,
        password: hashedpassword,
      },
    });
    res.status(200).json({
      message: `User Created Successfully. Welcome ${name} to RoadMap`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(404).json({ message: "User Not Found" });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return res.status(404).json({ message: "Password is invalied" });
  const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, {
    expiresIn: "1h",
  });
  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "Lax",
  });
  return res.status(200).json({
    message: "Login Successful",
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      isSubscribed: user.isSubscribed,
    },
  });
};

const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: false,
    sameSite: "Strict",
  });

  return res.status(200).json({ message: "Logged out successfully" });
};

const getMe = async (req, res) => {
  console.log("User in getMe:", req.user);
  return res.status(200).json({ user: req.user });
};

const updateUser = async (req, res) => {
  const { name, oldPassword, newPassword } = req.body;
  const userId = req.user.id;

  try {
    const updateData = { name , oldPassword, newPassword };

    if (newPassword && oldPassword) {
      const user = await prisma.user.findUnique({ where: { id: userId } });
      const isMatch = await bcrypt.compare(oldPassword, user.password);
      if (!isMatch) return res.status(400).json({ message: "old password wrong" });
      
      updateData.password = await bcrypt.hash(newPassword, 10);
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updateData,
      select: { id: true, name: true, email: true } 
    });

    res.status(200).json({ user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: "internal server error", error: error.message });
  }
};

const getMyRoadmaps = async (req, res) => {
  try {
    const userId = req.user.id; 

    const progress = await prisma.userProgress.findMany({
      where: {
        userId: userId
      }
    });

    return res.status(200).json({ roadmaps: progress });

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

    const existingProgress = await prisma.userProgress.findFirst({
      where: {
        userId,
        roadmapId: cleanRoadmapId,
      },
    });

    if (existingProgress) {
      return res.status(400).json({ 
        message: "You are already enrolled in this roadmap",
        userProgress: existingProgress 
      });
    }

    const userProgress = await prisma.userProgress.create({
      data: {
        user: {
      connect: { id: userId } 
    },
        roadmapId: cleanRoadmapId,
        status: "in-progress",
      },
    });

    return res.status(200).json({ 
      message: "Enrolled successfully", 
      userProgress 
    });

  } catch (error) {
    console.error("Enrollment Error:", error); 
    return res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = { register, login, logout, getMe, updateUser, getMyRoadmaps, enrollInRoadmap };
