const express = require("express");
const helmet = require("helmet");
const authRoutes = require("./src/Router/AuthRoute");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.trustProxy = true;
app.use(
  cors({
    origin: process.env.FRONT_URL || "http://localhost:5173", 
    credentials: true,
  })
);

app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" } 
}));

app.use("/", authRoutes);

const path = require("path");
app.use(express.static(path.join(__dirname, "../Front_End/dist")));

app.get("/(.*)", (req, res) => {
  res.sendFile(path.join(__dirname, "../Front_End/dist/index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
