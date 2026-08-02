const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const middleware = async (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        
        const user = await prisma.user.findUnique({
            where: { id: decoded.userId },
            select: { id: true, name: true, email: true}
        });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        req.user = user; 
        next(); 
        
    } catch (error) {
        console.log("Error details:", error.message); 
        return res.status(403).json({ message: "Forbidden: Invalid token" });
    }
};
const adminAuth = (req, res, next) => {
  const { email, password } = req.headers; 

 const adminAuth = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        return next(); 
    } 
    
    return res.status(403).json({ error: "Access Denied! This page is for admins only." });
};
};

module.exports = { middleware,adminAuth };