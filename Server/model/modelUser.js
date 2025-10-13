const mongoose = require("mongoose");
 const FormUser = new mongoose.Schema({
  FullName: {
    type: String,
    required: true,
  },
  Username: {
    type: String,
    required: true,
    unique: true,
  },
  Contact_Number: {
    type: Number,
    required: true,
    min: [1000000000, "Contact number should be exactly 10 digits"],
  max: [9999999999, "Contact number should be exactly 10 digits"],
  },
  Date_of_Birth: {
    type: Date,
    required: true,
    validate: {
      validator: function (value) {
        const today = new Date();
        const minDate = new Date(
          today.getFullYear() - 18,
          today.getMonth(),
          today.getDate()
        );
        return value <= minDate;
      },
      message: "User must be at least 18 years old",
    },
  },
  Address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  New_Password: {
    type: String,
    required: true,
  },
  New_Again_Password: {
    type: String,
    required: true,
    
  },
});

module.exports={
    FormUserModel:mongoose.model("FormUser",FormUser)
}