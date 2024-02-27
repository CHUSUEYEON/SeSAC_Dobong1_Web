const express = require("express");
const router = express.Router();
const controller = require("../controllers/Cmain");

router.get("/", controller.main);
router.get("/login", controller.login);
router.get("/register", controller.register);

// router.post("/user/profile/edit");

module.exports = router;
