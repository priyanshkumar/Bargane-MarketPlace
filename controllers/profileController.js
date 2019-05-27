var express = require("express");

var router = express.Router();

var authenticated = require("../config/middelware/isAuthenticated");

router.post("/profile", authenticated, function(req, res) {
  console.log(req.body);
  console.log(req.user);
});

module.exports = router;
