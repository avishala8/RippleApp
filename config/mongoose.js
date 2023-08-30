const mongoose = require("mongoose");

const dotenv = require("dotenv");
// const app = express();

dotenv.config({ path: "./config.env" });
const db = process.env.DATA;
mongoose
  .connect(db, {
    ///returns a promise and should be handled
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(() => {
    console.log("DB connection successful");
  });

// mongoose.connect("mongodb://localhost/rippleApp_dev");
// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "Error connecting to the DB"));
// db.once("open", function () {
//   console.log("Successfully connected to the Database");
// });
// exports.db = db;
