const express = require("express");
const { FormUserModel } = require("../model/modelUser");
const app = express();

const PostUser = async (req, res) => {

const userCreateDB =await FormUserModel.create(req.body)
try {
    
    res.status(201).json(userCreateDB);
} catch (error) {
   if (error.code === 11000) {
      res.status(400).json({ message: "Username already exists" });
    }
    
}

  
  
};
module.exports = {
  PostUser: PostUser,
};
