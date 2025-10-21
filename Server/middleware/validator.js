const { body } = require("express-validator");
const multer = require("multer");
const path = require("path");


class Validator  {
  validationRegistration = [
    body("FullName")
      .notEmpty()
      .withMessage("FullName is required")
      .ltrim()
      .rtrim()
      .isLength({ min: 3, max: 50 })
      .withMessage("FullName must be at least 3 characters long"),
    body("Username")
      .notEmpty()
      .withMessage("Username is required")
      .ltrim()
      .rtrim()
      .isLength({ min: 3, max: 50 })
      .withMessage("Username must be at least 3 characters long"),
    body("Contact_Number")
      .notEmpty()
      .withMessage("Contact_Number is required")
      .ltrim()
      .rtrim()
      .isNumeric()
      .isLength({ min: 10, max: 15 })
      .withMessage("Contact_Number must be at least 10 characters long"),
    body("Date_of_Birth")
      .notEmpty()
      .withMessage("Date_of_Birth is required")
      .isDate()
      .withMessage("Invalid Date_of_Birth format"),
    body("Address")
      .notEmpty()
      .withMessage("Address is required")
      .isLength({ min: 10, max: 200 })
      .withMessage("Address must be at least 10 characters long"),
    body("email")
      .notEmpty()
      .withMessage("email is required")
      .isEmail()
      .withMessage("Invalid email format")
      .ltrim()
      .rtrim()
      .normalizeEmail(),
    body("New_Password")
      .notEmpty()
      .withMessage("New_Password is required")
      .trim()
      .isLength({ min: 8, max: 30 })
      .isStrongPassword()
      .withMessage(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one symbol"
      ),
    body("New_Again_Password")
      .notEmpty()
      .withMessage("New_Again_Password is required")
      .trim()
      .isLength({ min: 8, max: 30 })
      .withMessage("New_Again_Password must be at least 8 characters long")
      .custom((value, { req }) => {
        if (value !== req.body.New_Password) {
          throw new Error("New_Again_Password does not match New_Password");
        }
        return true;
      }),
         body("Resume").custom((value, { req }) => {
      if (!req.file) {
        throw new Error("Resume file is required");
      }
      return true;
    }),
  ];
}


const { validationRegistration } = new Validator();

module.exports = { validationRegistration};
