const express= require("express")
const { PostUser } = require("./controller/userController")
const { validationRegistration } = require("./middleware/validator")
const upload = require("./middleware/multer")
const userRouters= express.Router()

userRouters.post("/signup",upload.single("Resume"),validationRegistration,PostUser)

module.exports=userRouters