var express = require("express");

var router = express.Router();

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

//search route for dynamic search page
router.get("/search", function(req, res) {
  res.render("search-apperance");
});

router.get("/post", authenticated, function(req, res) {
  res.render("post-ads");
});

router.get("/user", authenticated, function(req, res) {
  res.render("user-form");
});
module.exports = router;
