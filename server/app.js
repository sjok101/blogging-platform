const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
var path = require("path");

const app = express();

//add connection url later
//mongoose.connect();
//const db = mongoose.connection;
// db.once("open", () => {
//     console.log("Connected to mongodb..");
// })

app.use(express.static(path.join(__dirname, "../client/public")));
app.get("/api", (req, res) => {
  res.json({ users: ["testOne", "testTwo", "testThree"] });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Listening to port " + PORT);
});
