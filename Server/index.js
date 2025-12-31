const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const userRouters = require("./userRouters");
const passport = require("passport");
const session = require("express-session");
const cookie = require("cookie-parser");
const cookieParser = require("cookie-parser");

require("./utils/auth/Google");
require("./utils/auth/Linkdin");
require("./utils/auth/Github");
app.use(cookieParser());
app.use(cookieParser(process.env.CookieSecret));

app.use(
  session({
    secret: "kalki@05",
    saveUninitialized: false,
    resave: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use("/", userRouters);
mongoose
  .connect("mongodb://localhost:27017/MERNDemo")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
