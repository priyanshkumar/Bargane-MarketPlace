var express = require("express");

var router = express.Router();

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

module.exports = router;