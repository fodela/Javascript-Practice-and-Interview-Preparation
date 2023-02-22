const express = require("express");
const router = express.Router();
const registerController = require("../controller/registrationController.ts");

router.post("/", registerController.handleNewUser);

module.exports = router;
