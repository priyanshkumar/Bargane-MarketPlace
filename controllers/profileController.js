var express = require("express");
var router = express.Router();
var db = require("../models");
var authenticated = require("../config/middelware/isAuthenticated");

router.get("/profile", authenticated, function(req, res) {
  db.Profile.findOne({
    where: {
      UserId: req.user.id
    }
  })
    .then(function(result) {
      data = {
        profile: result
      };
      res.render("profile", data);
    })
    .catch(function(err) {
      console.log(err);
      res.json(err);
    });
});

router.get("/update", authenticated, function(req, res) {
  db.Profile.findOne({
    where: {
      UserId: req.user.id
    }
  })
    .then(function(result) {
      data = {
        profile: result
      };
      res.render("user-form", data);
    })
    .catch(function(err) {
      console.log(err);
      res.json(err);
    });
});

router.post("/api/profile", authenticated, function(req, res) {
  db.Profile.findOne({
    where: {
      UserId: req.user.id
    }
  }).then(function(result) {
    if (!result) {
      db.Profile.create({
        fName: req.body.fname,
        lName: req.body.lname,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        city: req.body.city,
        PCode: req.body.pcode,
        province: req.body.province,
        UserId: req.user.id
      })
        .then(function() {
          res.redirect("/");
        })
        .catch(function(err) {
          res.json(err);
        });
    } else {
      db.Profile.update(
        {
          fName: req.body.fname,
          lName: req.body.lname,
          email: req.body.email,
          phone: req.body.phone,
          address: req.body.address,
          city: req.body.city,
          PCode: req.body.pcode,
          province: req.body.province
        },
        {
          where: {
            id: result.id
          }
        }
      )
        .then(function() {
          res.redirect("/profile");
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  });
});

module.exports = router;
