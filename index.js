const express = require("express");
const app = express();
const port = 3000;

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in firing the server: ${err}`);
  } else {
    console.log(`Server is running on port: ${port}`);
  }
});