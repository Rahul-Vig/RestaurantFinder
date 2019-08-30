var express = require("express");
var exphbs = require("express-handlebars");
var db = require("./models");
var bodyParser = require("body-parser");

// db.Admin.create({ username: "admin", password: "password" });

// Create an instance of the express app.
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Data

// Routes
app.get("/", function(req, res) {
  res.render("index");
});

app.get("/client", function(req, res) {
  res.render("client");
});

app.get("/admin", function(req, res) {
  res.render("admin");
});

app.get("/modify", function(req, res) {
  res.render("modify");
});

app.get("/add", function(req, res) {
  res.render("add");
});

app.get("/franchise", function(req, res) {
  res.render("addFranchise");
});

app.get("/delete", function(req, res) {
  res.render("delete");
});

app.get("/api/login", function(req, res) {});

require("./routes/loginRoute.js")(app);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
