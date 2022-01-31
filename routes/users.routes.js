const express = require("express");
const { register, login } = require("../controller/user.controller");
// const { modelNames, models } = require("mongoose");
const userRouters = express.Router();

userRouters.post("/", register);
userRouters.post("/login", login);

module.exports = { userRouters };
