const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const SocialUser = require("../models/socialUser");

const login = asyncHandler(async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (user) {
    const samePassword = await bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (samePassword) {
      res.send({
        id: user._id,
        last_login: moment.now(),
        username: user.username,
        token: generateToken(user),
      });
      return;
    }
  }
  res.send({ error: "Invalid email or password" });
});

const loginViaSocial = asyncHandler(async (req, res) => {
  const duplicateSocialUser = await SocialUser.findOne({
    email: req.body.email,
  });
  console.log(!duplicateSocialUser);
  if (!duplicateSocialUser) {
    const socialUser = new SocialUser({
      email: req.body.email,
      name: req.body.name,
      image: req.body.image,
    });
    const createdSocialUser = await socialUser.save();
    res.status(200).send({
      id: createdSocialUser._id,
      email: createdSocialUser.email,
      name: createdSocialUser.name,
      image: createdSocialUser.image,
      message: "User successfully created",
    });
  } else {
    res.status(200).send({
      message: "User already exist",
      id: duplicateSocialUser._id,
      name: duplicateSocialUser.name,
      image: duplicateSocialUser.image,
      email: duplicateSocialUser.email,
    });
  }
});

const register = asyncHandler(async (req, res) => {
  const duplicateUser = await User.findOne({
    username: req.body.username,
  });
  if (duplicateUser) {
    // error
    res.send({
      error: `Username ${req.body.username} already exist`,
    });
  } else {
    const user = new User({
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    const createdUser = await user.save();
    res.status(200).send({
      id: createdUser._id,
      username: createdUser.username,
    });
  }
});

module.exports = {
  login,
  register,
  loginViaSocial,
};
