var express = require("express");
var sequelize = require("sequelize");
var router = express.Router();
var db = require("../models");

var authenticated = require("../config/middelware/isAuthenticated");
const Op = sequelize.Op;
router.get("/search", function(req, res) {
  db.Ad.findAll({
    where: {
      name: {
        [Op.substring]: "iphone"
      }
    },
    include: [db.User]
  })
    .then(function(result) {
      console.log(result);
      //   var data = {
      //     checker: false,
      //     result: []x
      //   };
      //   if (result) {
      //     (data.checker = true), (data.result = result);
      //   }
      //   res.render("search", data);
      res.json(result);
    })
    .catch(function(err) {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
