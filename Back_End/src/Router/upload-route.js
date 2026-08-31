const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../middlewares/upload-middleware'); 
const uploadController = require("../Controller/upload-controller");

router.post('/upload', uploadMiddleware.single('roadmapFile'), uploadController.uploadRoadmap);

module.exports = router;