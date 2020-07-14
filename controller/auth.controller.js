const userSchema = require("../schema/auth.schema");
const userService = require("../survices/auth.services");
const { helpers } = require("../helpers");
const bcrypt = require("bcryptjs");
module.exports = {
  createUser: async (req, res) => {
    const validation = userSchema.signupSchema.validate(req.body);
    if (validation.error) {
      console.log(validation.error);
      return res.status(400).json({
        message: validation.error.details[0].message,
      });
    }
    try {
      const user = await userService.checkUser(req.body.email);
      if (user)
        return res
          .status(400)
          .send({ message: "Email already registered. Take an another email" });
      newUser = new User(req.body);
      const token = await helpers.signToken(newUser)
      await userService.registerUser(newUser);
      res.status(201).json({
        token: token,
        message: "Account is successfully created and email has been sent.",

      });
      // const mail = await helpers.sendEmail(newUser, req, res);
      // if (mail === true) {
      //   res.status(201).json({
      //     success: newUser,
      //     message: "Account is successfully created and email has been sent.",
      //   });
      // } else {
      //   res.status(400).json({
      //     message: "not created",
      //   });
      // }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
  signin: async (req, res) => {
    const validation = userSchema.signInSchema.validate(req.body);
    if (validation.error) {
      console.log(validation.error);
      return res.status(400).json({
        message: validation.error.details[0].message,
      });
    }
    try {
      console.log(req.body)
      const { email, password } = req.body
      const user = await userService.checkUser(email);
      console.log("user is ", user)
      if (user) {
        //check password
        bcrypt.compare(password, user.password).then(isMatch => {
          if (isMatch) {
            res.json({ msg: "Success" })
          }
          else {
            return res.status(400).json({ password: "Password incorrect" });
          }
        })
      }
      else {
        res.status(500).json({
          message: "Email Does not exists"
        })
      }
    }
    catch (error) {
    }
  },
}