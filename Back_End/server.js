const express = require("express");
const helmet = require("helmet");
const authRoutes = require("./src/Router/AuthRoute");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.trustProxy = true;

app.use(cors({
  origin: true, 
  credentials: true
}));

app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" } 
}));

app.use("/", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});