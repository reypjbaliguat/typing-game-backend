const express = require("express");
const { getScores, addScore } = require("../controllers/scoreController.js");

const scoreRouter = express.Router();

scoreRouter.get("/get-scores", getScores);
scoreRouter.post("/add-score", addScore);

module.exports = scoreRouter;
