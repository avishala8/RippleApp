const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("./config/mongoose");
// imorting layouts and using them
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// importing static files
app.use(express.static("./assets"));

// use express router
app.use("/", require("./routes"));

// setup the views engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in firing the server: ${err}`);
  } else {
    console.log(`Server is running on port: ${port}`);
  }
});
