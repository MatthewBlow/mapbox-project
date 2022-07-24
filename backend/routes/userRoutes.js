const router = require("express").Router()
const { createUser, loginUser } = require("../controllers/usersController")
const User = require("../models/userModel")

router.post("/register", createUser)
router.post("/login", loginUser)

module.exports = router