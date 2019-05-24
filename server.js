var express = require("express");
var exphbs = require("express-handlebars");

var port = process.env.PORT || 3000;

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(port, function() {
  console.log(`Server running on port ${port}`);
});
