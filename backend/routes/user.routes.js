const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");

router.post("/register",  [
  body("fullName.firstName")
    .notEmpty()
    .isLength({ min: 3 })
    .withMessage("first name must be atleast 3 character long"),
  body("fullName.lastName")
    .notEmpty()
    .isLength({ min: 3 })
    .withMessage("last name must be atleast 3 character long"),
  body("email").isEmail().normalizeEmail(),
  body("password").isLength({ min: 6 }),
],userController.registerUser);

module.exports = router;
