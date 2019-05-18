var passport = require("passport");
var localStrategy = require("passport-local");

var db = require("../models");

passport.use(
  new localStrategy({ usernameField: email }, function(email, password, done) {
    db.findOne({
      where: {
        email: email
      }
    }).then(function(dbUser) {
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect email"
        });
      } else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password"
        });
      }

      return done(null, dbUser);
    });
  })
);

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = passport;