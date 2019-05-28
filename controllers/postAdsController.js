var express = require("express");
var router = express.Router();
var db = require("../models");
var authenticated = require("../config/middelware/isAuthenticated");

router.post("/api/post", authenticated, function(req, res) {
  db.Ad.create({
    name: req.body.title,
    category: req.body.category,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity,
    logo: req.body.logo,
    UserId: req.user.id
  })
    .then(function() {
      res.redirect("/");
    })
    .catch(function(err) {
      console.log(err);
    });
});

module.exports = router;
