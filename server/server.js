var express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

//add connection url later
//mongoose.connect();
//const db = mongoose.connection;
// db.once("open", () => {
//     console.log("Connected to mongodb..");
// })

app.use(express.static(path.join(__dirname, "../client/public")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/public", "index.jsx"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Listening to port " + PORT);
});
