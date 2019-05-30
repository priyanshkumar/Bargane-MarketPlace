var express = require("express");
var sequelize = require("sequelize");
var router = express.Router();
var db = require("../models");

var authenticated = require("../config/middelware/isAuthenticated");
const Op = sequelize.Op;
router.post("/search", function(req, res) {
  db.Ad.findAll({
    where: {
      name: {
        [Op.substring]: req.params.search
      }
    }
  })
    .then(function(result) {
      var data = {
        checker: false,
        result: {}
      };
      if (result.length !== 0) {
        (data.checker = true), (data.result = result);
      } else {
        data.checker = false;
      }
      res.render("search", data);
      // res.json(data);
    })
    .catch(function(err) {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
