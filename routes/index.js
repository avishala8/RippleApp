const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home_controller");

router.get("/", homeController.testfunction);
router.use("/user", require("./user"));

module.exports = router;
