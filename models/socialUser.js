const mongoose = require("mongoose");

const socialUserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    image: { type: String, required: true },
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const SocialUser = mongoose.model("Social User", socialUserSchema);
module.exports = SocialUser;
