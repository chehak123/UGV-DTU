const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
let port = process.env.PORT || 3000
const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("index");
  });

app.listen(port, function() {
  console.log("Server started on port 3000.");
});