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
      post: result
    };
    console.log(data);
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
      post: result
    };
    console.log(data);
    res.render("post-ads", data);
  });
});

module.exports = router;
