const asyncHandler = require("express-async-handler");
const Score = require("../models/score");

const getScores = asyncHandler(async (req, res) => {
  const scores = await Score.find();
  res.status(200).send({ data: scores });
});

const createScore = asyncHandler(async (req, res) => {
  const { user_id, speed, email } = req.body;
  const score = new Score({
    email,
    user_id,
    speed,
  });
  const createdScore = await score.save();
  res.status(200).send({
    id: createdScore._id,
    user_id: createdScore.user_id,
    speed: createdScore.speed,
    email: createdScore.email,
  });
});

module.exports = {
  getScores,
  createScore,
};
