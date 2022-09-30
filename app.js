var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set("view engine", "ejs");
app.use("/assets", express.static("./stylings"));

app.get("/home", function (req, res) {
  res.render("index", { qs: req.query });
  console.log(req.query);
});

app.get("/contact", function (req, res) {
  res.render("contact", { qs: req.query });
});

app.post("/contact", urlencodedParser, function (req, res) {
  res.render("contact-success", { cdata: req.body });
});

app.get("/profile/:ppl", function (req, res) {
  var obj = {
    name: "nobita",
    age: 8,
    hobbies: ["play", "read", "write"],
  };
  res.render("profile", { ppl: req.params.ppl, data: obj });
});

app.listen(3000);
