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

router.post("/api/post/:id", authenticated, function(req, res) {
  db.Ad.update(
    {
      name: req.body.title,
      category: req.body.category,
      description: req.body.description,
      price: req.body.price,
      quantity: req.body.quantity,
      logo: req.body.logo
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(function(result) {
      res.redirect("/userads");
    })
    .catch(function(err) {
      console.log(err);
    });
});

router.get("/delete/ad/:id", authenticated, function(req, res) {
  db.Ad.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(function(result) {
      res.redirect("/userads");
    })
    .catch(function(err) {
      console.log(err);
    });
});

router.get("/view/ad/:id", authenticated, function(req, res) {
  res.redirect("/api/product/personal/" + req.params.id);
});
module.exports = router;
