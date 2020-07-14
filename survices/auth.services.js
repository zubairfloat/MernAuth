const User = require("../models/auth.models");

const checkUser = (email) => {
  return User.findOne({ email });
};
const registerUser = (newUser) => {
  return newUser.save();
};
const userServices = {
  checkUser,
  registerUser,
};
module.exports = userServices;
