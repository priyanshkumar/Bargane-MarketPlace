var express = require("express");

var route = express.Router();

router.get("/", function(req, res) {
  res.render("index");
});

router.get("/:route/login", function(req, res) {
  var route = req.params.route;

  if (req.user) {
    res.render("index");
  }

  res.render("login");
});

router.get("/signup", function(req, res) {
  if (req.user) {
    res.render("index");
  }

  res.render("sign-up");
});
