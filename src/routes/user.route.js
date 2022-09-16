const express = require("express");
const router = express.Router();
const usersController = require("../controllers/user.controller.js");
router.get("/", usersController.getUsers);
router.post("/", usersController.createUser);
module.exports = router;
