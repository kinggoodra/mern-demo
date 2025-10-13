const express= require("express")
const { PostUser } = require("./Controller/userController")
const userRouters= express.Router()

userRouters.post("/signup",PostUser)

module.exports=userRouters