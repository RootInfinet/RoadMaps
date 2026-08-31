const express = require("express");
const progressController = require("../Controller/ProgressController");
const router = express.Router();
const { validate} = require("../middlewares/validate");
const { middleware} = require("../middlewares/auth");

router.get("/progress/:roadmapId", middleware, progressController.getProgressSummary);
router.patch("/progress/:roadmapId", middleware, progressController.toggleStep);

module.exports = router;