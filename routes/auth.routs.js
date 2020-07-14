const express = require("express");
const router = express.Router();
const authController = require("../controller/auth.controller");

router.route('/signup')
    .post(authController.createUser);

router.route('/signin')
    .post(authController.signin);

module.exports = router;
