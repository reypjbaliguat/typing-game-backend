const express = require("express");
const {
  login,
  register,
  loginViaSocial,
} = require("../controllers/authController.js");

const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.post("/login-social", loginViaSocial);
authRouter.post("/register", register);

module.exports = authRouter;
