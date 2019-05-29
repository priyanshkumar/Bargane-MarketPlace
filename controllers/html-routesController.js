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
  var data = {
    checker: false
  };
  if (req.user) {
    data.checker = true;
    res.render("index", data);
  }

  res.render("sign-up");
});

router.get("/product", function(req, res) {
  res.render("product-display");
});

router.get("/user-ads", function(req, res) {
  res.render("user-ads");
});

router.get("/post", authenticated, function(req, res) {
  res.render("post-ads");
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
