var express = require("express");
var db = require("../models");
var passport = require("../config/passsport");

var router = express.Router();

router.get("/:category", function(req, res) {
  db.Ad.findAll({
    where: {
      category: req.params.category
    }
  })
    .then(function(result) {
      var data = {
        checker: false,
        checks: false,
        result: {}
      };

      if (req.user) {
        data.checker = true;
      }

      if (result.length !== 0) {
        (data.checks = true), (data.result = result);
      } else {
        data.checks = false;
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
