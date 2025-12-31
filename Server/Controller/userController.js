const { FormUserModel } = require("../model/modelUser");
const { validationResult } = require("express-validator");
const { hash, compare } = require("bcryptjs");
const { UploadCloudinary } = require("../utils/cloudinary");
const fs = require("fs");
const { jwtToken } = require("../middleware/jwt");
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

const GetUser = async (req, res) => {
  const ValidationError = validationResult(req);
  if (!ValidationError.isEmpty()) {
    return res.status(400).json(ValidationError.array());
  }
  const { email, password } = await req.body;
  const login = await FormUserModel.findOne({ email: email });
  if (!login)
    return await res
      .status(401)
      .json({ message: "Email not valid or user not register " });
  const validatepass = await compare(password, login.New_Again_Password);
  if (!validatepass)
    return res
      .status(401)
      .json({ message: "Invalid password or not proper fill password " });
  const token = jwtToken(login._id, login.Username, login.email, "local");
  res.cookie("tokenForm", token, {
    secure: false,
    maxAge: 60 * 60 * 1000,
    httpOnly: true,
  });

  return await res
    .status(200)
    .json({ message: `Welcome ${login.FullName}`, login: login, token: token });
};
module.exports = {
  PostUser: PostUser,
  GetUser: GetUser,
};
