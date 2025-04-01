const express = require("express");
const router = express.Router();
const someFunctionController = require("../controller/someFunctionController");
const authMiddleware = require("../controller/JWTAuthMiddlerware");
router.post("/someFunction", someFunctionController.someFunction);

module.exports = router;
