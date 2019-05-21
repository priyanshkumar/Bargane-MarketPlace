var express = require("express");

var router = express.Router();

router.get("/", function(req, res) {
  res.render("index");
});

router.get("/login", function(req, res) {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.render("index");
  }
  res.render("login");
});

router.get("/sign-up", function(req, res) {
  if (req.user) {
    res.render("index");
  }

  res.render("sign-up");
});

module.exports = router;
