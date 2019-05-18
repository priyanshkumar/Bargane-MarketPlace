var express = require("express");
var db = require("../models");
var passport = require("../config/passsport");

var router = express.Router();

router.post("/api/login/:page", passport.authenticate("local"), function(
  req,
  res
) {
  page = req.params.page;
  res.json("/" + page);
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

app.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

app.get("/api/userdata", function(req, res) {
  if (!req.user) {
    res.json("No User Found");
  } else {
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  }
});
