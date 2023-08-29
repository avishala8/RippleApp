const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/rippleApp_dev");
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to the DB"));
db.once("open", function () {
  console.log("Successfully connected to the Database");
});
exports.db = db;
