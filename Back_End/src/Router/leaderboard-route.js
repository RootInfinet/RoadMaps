const express = require('express');
const controller = require('../Controller/leaderboard-controller');
const router = express.Router();

router.get('/leaderboard', controller.leaderboardController);

module.exports = router;
