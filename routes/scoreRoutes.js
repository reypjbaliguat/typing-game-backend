const express = require("express");
const authMiddleWare = require("../middlewares/authenticateJWT");
const { getScores, createScore } = require("../controllers/scoreController.js");

const scoreRouter = express.Router();

scoreRouter.get("/", getScores);
scoreRouter.post("/", authMiddleWare, createScore);

module.exports = scoreRouter;
