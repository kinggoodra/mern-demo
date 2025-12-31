const passport = require("passport");

const express = require("express");
const { PostUser, GetUser } = require("./controller/userController");
const { validationRegistration } = require("./middleware/validator");
const upload = require("./middleware/multer");
const { Linkedin, LinkedinCallback } = require("./utils/auth/Linkdin");
const { jwtGoogle, jwtGithub } = require("./middleware/jwt");
const userRouters = express.Router();
require("dotenv").config();
userRouters.post(
  "/signup",
  upload.single("Resume"),
  validationRegistration,
  PostUser
);
userRouters.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email", "openid"],
  })
);
userRouters.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "http://localhost:5173/",
  }),
  jwtGoogle
);
userRouters.get("/auth/linkedin", Linkedin);

userRouters.get("/auth/linkedin/callback", LinkedinCallback);

userRouters.get(
  "/auth/github",
  passport.authenticate("github", {
    scope: ["user", "repo"],
  })
);

userRouters.get(
  "/auth/github/callback",
  passport.authenticate("github", {
    session: false,
    failureRedirect: "http://localhost:5173/",
  }),
  jwtGithub
);
userRouters.post("/",GetUser)

module.exports = userRouters;
