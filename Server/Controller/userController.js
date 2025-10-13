const express = require("express");
const { FormUserModel } = require("../model/modelUser");
const app = express();

const PostUser = async (req, res) => {

const userCreateDB =await FormUserModel.create(req.body)
res.status(201).json(userCreateDB);
};
module.exports = {
  PostUser: PostUser,
};
