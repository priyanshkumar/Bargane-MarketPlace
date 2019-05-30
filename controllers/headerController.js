var express = require("express");
var db = require("../models");
var passport = require("../config/passsport");

var router = express.Router();

router.get("/api/header/:category", function(req, res) {
  db.Ad.findAll({
    where: {
      category: req.params.category
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
