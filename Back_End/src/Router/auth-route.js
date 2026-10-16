const express = require("express");
const router = express.Router();
const authController = require("../Controller/auth-controller");
const mainController = require("../Controller/main-controller");
const { middleware, adminAuth } = require("../middlewares/auth");

router.get('/dashboard-data',adminAuth, (req, res) => {
    res.json({ data: "This is a secret data for admin get out from here" });
});
router.patch("/updateprojectsstate",middleware, authController.updateprojectsstate);
router.get('/GetProjects', middleware, authController.GetProjects);

module.exports = router;