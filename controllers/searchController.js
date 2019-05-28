var express = require("express");

var router = express.Router();
var db = require("../models");

var authenticated = require("../config/middelware/isAuthenticated");

router.get("/search", function(req, res) {
  db.Ad.findAll({
    where: {
      name: "%" + req.body.search + "%"
    }
  })
    .then(function(result) {
      console.log(result);
    })
    .catch(function(err) {
      console.log(err);
      res.json(err);
    });
  res.render("search-apperance");
});

module.exports = router;
