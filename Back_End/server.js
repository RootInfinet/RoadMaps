const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');
require("dotenv").config();

require('./src/redisClient');
const { getClient } = require('./src/redisClient');

const main_route = require("./src/Router/main-route");
const auth_route = require("./src/Router/auth-route");
const progress_route = require("./src/Router/progress-route");
const upload_route = require("./src/Router/upload-route");
const leaderboard_route = require("./src/Router/leaderboard-route");

const app = express();
app.set('trust proxy', 1);

app.use((req, res, next) => {
  console.log(`[Request Received] Method: ${req.method} | Path: ${req.url} | Origin: ${req.headers.origin}`);
  next();
});

app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" },
  crossOriginOpenerPolicy: { policy: "same-origin-allow-popups" }
}));

app.use(cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
}));

app.use(cookieParser());
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100, 
  standardHeaders: true,
  legacyHeaders: false,
  message: { status: 429, message: "Too many requests, please try again later." }
});

app.use(express.json({ limit: '10kb' }));

app.use(limiter);

app.use("/", main_route);
app.use("/auth", auth_route);
app.use("/progress", progress_route);
app.use("/upload", upload_route);
app.use("/leaderboard", leaderboard_route);

app.use((err, req, res, next) => {
  console.error("Global Error Caught:", err.stack);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    status: "error",
    message: err.message || "Internal Server Error",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});