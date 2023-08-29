const mongoose = require("mongoose");

const score = new mongoose.Schema(
  {
    user_id: { type: String, required: true },
    email: { type: String, required: true },
    speed: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Score = mongoose.model("Score", score);
module.exports = Score;
