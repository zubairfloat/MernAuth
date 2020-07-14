// const passport = require("passport");
// const JwtStrategy = require("passport-jwt").Strategy;
// const extractJWT = require("passport-jwt");
// const LocalStrategy = require('passport-local').Strategy;
// const { JWT_SECRET } = require('./index');
// const User = require('../models/auth.models');


// const cookieExtractor = req => {
//     let token = null;
//     if (req && req.cookies) {
//         token = req.cookies['access_token'];
//     }
//     return token;
// }
// // JSON WEB TOKENS STRATEGY
// passport.use(new JwtStrategy({
//     jwtFromRequest: cookieExtractor,
//     secretOrKey: JWT_SECRET,
//     passReqToCallback: true
// }, async (req, payload, done) => {
//     try {
//         // Find the user specified in token
//         const user = await User.findById(payload.sub);

//         // If user doesn't exists, handle it
//         if (!user) {
//             return done(null, false);
//         }

//         // Otherwise, return the user
//         req.user = user;
//         done(null, user);
//     } catch (error) {
//         done(error, false);
//     }
// }));

// // LOCAL STRATEGY
// passport.use(new LocalStrategy({
//     usernameField: 'email'
// }, async (email, password, done) => {
//     try {
//         // Find the user given the email
//         const user = await User.findOne({ "local.email": email });

//         // If not, handle it
//         if (!user) {
//             return done(null, false);
//         }

//         // Check if the password is correct
//         const isMatch = await user.isValidPassword(password);

//         // If not, handle it
//         if (!isMatch) {
//             return done(null, false);
//         }

//         // Otherwise, return the user
//         done(null, user);
//     } catch (error) {
//         done(error, false);
//     }
// }));