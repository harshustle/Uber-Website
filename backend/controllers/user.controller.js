//user.controller.js
const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");
const blacklistTokenSchema = require("../models/blackListToken.model");

module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullName, email, password, socketId } = req.body;
  const isUserAlready = await userModel.findOne({ email });
  if (isUserAlready) {
    return res.status(409).json({ message: "Email already exists" });
  }
  const hashPassword = await userModel.hashPassword(password);

  const user = await userService.createUser({
    firstName: fullName.firstName,
    lastName:fullName.lastName,
    email,
    password: hashPassword,
    socketId: socketId || "defaultSocketId" 
  });

  const token = user.generateAuthToken();
  console.log(user);
  res.status(201).json({ user, token });
};

module.exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email }).select("+password");
  
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const isValid = await user.comparePasswords(password);
  if (!isValid) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const token = user.generateAuthToken();
  res.cookie("token", token);
  res.status(201).json({  token,user });

};

module.exports.profile = async (req, res, next) => {
  res.status(200).json({ user: req.user });
};

module.exports.logoutUser = async (req, res, next) => {
  res.clearCookie("token");
  const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(" ")[1]);

  await blacklistTokenSchema.create({ token });

  res.status(200).json({ message: "Logged out successfully" });
};