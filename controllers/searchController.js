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
        [Op.substring]: req.body.search
      }
    }
  })
    .then(function(result) {
      var data = {
        checker: false,
        checks: false,
        result: {}
      };
      if (result.length !== 0) {
        (data.checks = true), (data.result = result);
      } else {
        data.checks = false;
      }

      if (req.user) {
        data.checker = true;
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
