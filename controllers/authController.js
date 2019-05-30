var express = require("express");
var db = require("../models");
var passport = require("../config/passsport");

var router = express.Router();

router.post("/api/login/:page", passport.authenticate("local"), function(
  req,
  res
) {
  db.Profile.findOne({
    where: {
      UserId: req.user.id
    }
  }).then(function(result) {
    if (result === null) {
      res.json("/user");
    } else {
      var page = req.params.page;
      if (page === "index") {
        res.json("/");
      } else {
        res.json("/" + page);
      }
    }
  });
});

router.post("/api/signup", function(req, res) {
  db.User.create({
    email: req.body.email,
    password: req.body.password
  })
    .then(function() {
      res.redirect(307, "/api/login/index");
    })
    .catch(function(err) {
      console.log(err);
      res.json(err);
    });
});

router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

router.get("/api/userdata", function(req, res) {
  if (!req.user) {
    res.json("No User Found");
  } else {
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  }
});

module.exports = router;
