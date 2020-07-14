const Joi = require("@hapi/joi");

const signupSchema = Joi.object().keys({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().min(5).max(255).required().email(),
  password: Joi.string().min(5).max(30).required(),
  // companyName: Joi.string().min(3).max(50).required(),
});
const signInSchema = Joi.object().keys({
  email: Joi.string().min(5).max(255).required().email(),
  password: Joi.string().min(5).max(30).required(),
});

module.exports = {
  signupSchema,
  signInSchema,
};
