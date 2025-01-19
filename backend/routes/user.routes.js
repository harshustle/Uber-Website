//user.routes.js
const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middleware/auth.middleware"); 

router.post(
  "/register",
  [
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
  ],
  userController.registerUser
);

router.post("/login",[
    body("email").isEmail().normalizeEmail(),
    body("password").isLength({ min: 6 }),
] ,userController.loginUser);

router.get("/profile", authMiddleware.authUser ,userController.profile);
router.get('/logout',authMiddleware.authUser,userController.logoutUser);

module.exports = router;