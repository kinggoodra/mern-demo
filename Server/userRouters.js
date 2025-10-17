const express= require("express")
const { PostUser } = require("./controller/userController")
const { validationRegistration } = require("./middleware/validator")
const userRouters= express.Router()

userRouters.post("/signup",validationRegistration,PostUser)

module.exports=userRouters