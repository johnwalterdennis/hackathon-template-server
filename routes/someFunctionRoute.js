const express = require("express");
const router = express.Router();
const someFunctionController = require("../controllers/someFunctionController");
const authMiddleware = require("../middlewares/JWTAuthMiddleware.js");
router.post("/someFunction", someFunctionController.getSomething);

module.exports = router;
