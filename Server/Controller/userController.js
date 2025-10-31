const { FormUserModel } = require("../model/modelUser");
const { validationResult } = require("express-validator");
const { hash } = require("bcryptjs");
const { UploadCloudinary } = require("../utils/cloudinary");
const fs = require("fs");
require("dotenv").config();
const PostUser = async (req, res) => {
  const ValidationError = validationResult(req);
  if (!ValidationError.isEmpty()) {
    return res.status(400).json(ValidationError.array());
  }

  const {
    FullName,
    Username,
    Contact_Number,
    Date_of_Birth,
    Address,
    email,
    New_Password,
    New_Again_Password,
  } = req.body;
  
    const { hash_New_Again_Password, hash_New_Password } = {
      hash_New_Password: await hash(New_Password, 10),
      hash_New_Again_Password: await hash(New_Again_Password, 10),
    };
 
  const ResponsecCloudinary = await UploadCloudinary(req.file.path);
  const newUser = await FormUserModel.create({
    FullName,
    Username,
    Contact_Number,
    Date_of_Birth,
    Address,
    email,
    New_Password: hash_New_Password,
    New_Again_Password: hash_New_Again_Password,
    CloudinaryPublicURLSecure: ResponsecCloudinary.secure_url,
  });
  if (ResponsecCloudinary != null) return fs.unlinkSync(req.file.path);

  return await res.status(201).json(newUser);
  
};


module.exports = {
  PostUser: PostUser,
  
};
