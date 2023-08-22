const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET || "somethingsecret",
    {
      expiresIn: "30d",
    }
  );
};

module.exports = generateToken;
