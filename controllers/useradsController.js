var express = require("express");
var sequelize = require("sequelize");
var router = express.Router();
var db = require("../models");

var authenticated = require("../config/middelware/isAuthenticated");

router.get("/userads", authenticated, function(req, res) {
  db.Ad.findAll({
    where: {
      UserId: req.user.id
    }
  }).then(function(result) {
    var data = {
      checker: false,
      post: result
    };
    if (req.user) {
      data.checker = true;
    }
    res.render("user-ads", data);
  });
});

router.get("/update/ad/:id", authenticated, function(req, res) {
  db.Ad.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(result) {
    var data = {
      checker: false,
      post: result
    };
    if (req.user) {
      data.checker = true;
    }
    res.render("post-ads", data);
  });
});

module.exports = router;
