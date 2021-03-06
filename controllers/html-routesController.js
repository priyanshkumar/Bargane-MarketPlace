var express = require("express");

var router = express.Router();
var db = require("../models");

var authenticated = require("../config/middelware/isAuthenticated");

router.get("/", function(req, res) {
  var data = {
    checker: false
  };
  if (req.user) {
    data.checker = true;
  }
  res.render("index", data);
});

router.get("/login", function(req, res) {
  // If the user already has an account send them to the members page
  req.logout();
  var data = {
    checker: false
  };
  if (req.user) {
    data.checker = true;
    res.render("index", data);
  }
  res.render("login");
});

router.get("/sign-up", function(req, res) {
  req.logout();
  var data = {
    checker: false
  };
  if (req.user) {
    data.checker = true;
    res.render("index", data);
  }

  res.render("sign-up");
});

router.get("/user-ads", function(req, res) {
  var data = {
    checker: false
  };
  if (req.user) {
    data.checker = true;
  }
  res.render("user-ads", data);
});

router.get("/post", authenticated, function(req, res) {
  var data = {
    checker: false
  };
  if (req.user) {
    data.checker = true;
  }
  res.render("post-ads", data);
});

router.get("/user", authenticated, function(req, res) {
  db.Profile.findOne({
    where: {
      UserId: req.user.id
    }
  })
    .then(function(result) {
      if (!result) {
        res.render("user-form");
      } else {
        res.redirect("/");
      }
    })
    .catch(function(err) {
      console.log(err);
    });
});
module.exports = router;
