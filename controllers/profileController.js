var express = require("express");
var router = express.Router();
var db = require("../models");
var authenticated = require("../config/middelware/isAuthenticated");

router.post("/api/profile", authenticated, function(req, res) {
  console.log(req.body);
  console.log(req.user);

  db.Profile.create({
    fName: req.body.fname,
    lName: req.body.lname,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.fname,
    city: req.body.address,
    PCode: req.body.city,
    province: req.body.province,
    UserId: req.user.id
  })
    .then(function() {
      res.redirect("/");
    })
    .catch(function(err) {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
