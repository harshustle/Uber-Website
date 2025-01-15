//user.controller.js
const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");

module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullName, email, password, socketId } = req.body;
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
