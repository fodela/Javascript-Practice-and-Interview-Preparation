const router = require("express").Router();
const authController = require("../controller/authController.ts");

router.post("/", authController.handleLogin);

module.exports = router;
