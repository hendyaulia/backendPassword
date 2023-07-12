const usersController = require("../controllers/user.controller");
const nodemailer = require("nodemailer");

const express = require("express");
const router = express.Router();

router.post("/register", usersController.register);
router.post("/login", usersController.login);
router.get("/user-Profile", usersController.userProfile);
router.post("/otpLogin", usersController.otpLogin);
router.post("/otpVerify", usersController.verifyOTP);

module.exports = router;