const express = require("express");
const { register,
  login,
  logout,
  getMe,
  getMyRoadmaps,
  enrollInRoadmap,
  submitProjects,
  GetAvailableRoadmaps,
  getSteps,
  updateuser} = require("../Controller/main-controller");
const progressController = require("../Controller/ProgressController");
const router = express.Router();
const { validate, urlSchema } = require("../middlewares/validate");
const { middleware , adminAuth } = require("../middlewares/auth");
const { z } = require("zod");
const rateLimit = require("express-rate-limit");

const regetershema = z.object({
  email: z.string().email("THis is not an email"),
  password: z.string().min(8, "password must be at leatest 8 charcter"),
  name: z.string().min(2, "the name is to0 short"),
});

const loginSchema = z.object({
  email: z.string().email("Email is invalid"),
  password: z.string().min(8, "password must be at leatest 8 charcter"),
});

const loginLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  message:
    "You have reached the maximum number of attempts. Try again in 1 minute.",
});

const regestirLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  message:
    "You have reached the maximum number of attempts. Try again in 1 minute.",
});

router.post("/register",regestirLimiter, validate(regetershema), register);
router.post("/login",loginLimiter, validate(loginSchema), login);
router.post("/logout", middleware, logout);
router.get("/me",middleware, getMe);
router.get("/my-roadmaps",middleware, getMyRoadmaps);
router.post("/enroll", middleware, enrollInRoadmap);
router.get("/Avroadmaps", middleware, GetAvailableRoadmaps);
router.get("/steps/:id", middleware, getSteps);
router.put('/update', middleware, updateuser);

router.post("/submit-project", middleware, validate(urlSchema), submitProjects);


module.exports = router;
