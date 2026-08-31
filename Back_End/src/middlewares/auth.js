const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const middleware = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    const userId = decoded.userId || decoded.id;

if (decoded.email === process.env.ADMIN_EMAIL && decoded.role === "admin") {
    req.user = {
        id: "admin",
        role: "admin",
        email: decoded.email,
    };
    return next();
}

    if (!userId) {
      return res
        .status(403)
        .json({ message: "Forbidden: Invalid token structure" });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, name: true, email: true, role: true },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("JWT Verify Error Details:", error.message);
    return res.status(403).json({ message: "Forbidden: Invalid token" });
  }
};

const adminAuth = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    return next();
  }
  return res
    .status(403)
    .json({ error: "Access Denied! This page is for admins only." });
};

module.exports = { middleware, adminAuth };
