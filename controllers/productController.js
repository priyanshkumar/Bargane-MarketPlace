var express = require("express");
var router = express.Router();
var db = require("../models");
var authenticated = require("../config/middelware/isAuthenticated");

router.get("/api/product/:id", authenticated, function(req, res) {
  db.Ad.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(function(result) {
      db.Profile.findOne({
        where: {
          UserId: result.UserId
        }
      })
        .then(function(p_result) {
          var data = {
            post: result,
            profile: p_result
          };
          res.render("product-display", data);
        })
        .catch(function(err) {
          console.log(err);
        });
    })
    .catch(function(err) {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;