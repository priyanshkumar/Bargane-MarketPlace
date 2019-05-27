var express = require("express");
var session = require("express-session");
var exphbs = require("express-handlebars");
var passport = require("./config/passsport");

var port = process.env.PORT || 3000;

var db = require("./models");
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

var htmlroutes = require("./controllers/html-routesController");
app.use(htmlroutes);

var authRoutes = require("./controllers/authController");
app.use(authRoutes);

var profileRoutes = require("./controllers/profileController");
app.use(profileRoutes);

db.sequelize.sync().then(function() {
  app.listen(port, function() {
    console.log(`Server running on port ${port}`);
  });
});
