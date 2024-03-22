const express = require("express");
const router = express.Router();
const userController = require("../controllers/user_controller");

router.get("/profile", userController.getUser);

router.get("/signup", userController.signupSchema);
router.get("/signin", userController.signinSchema);
router.post("/signup/create", userController.create);
router.post("/signin/create-session", userController.createSession);
module.exports = router;
