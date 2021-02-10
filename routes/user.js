const express = require("express");

const router = express.Router();

const usersController = require("../controllers/user");

// User Routes
router.get("/users", usersController.getUser);

module.exports = router;
