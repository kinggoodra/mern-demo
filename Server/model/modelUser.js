const mongoose = require("mongoose");
const FormUser = new mongoose.Schema({
  FullName: {
    type: String,
  },
  Username: {
    type: String,
    unique: true,
  },
  Contact_Number: {
    type: Number,
    min: [1000000000, "Contact number should be exactly 10 digits"],
    max: [9999999999, "Contact number should be exactly 10 digits"],
  },
  Date_of_Birth: {
    type: Date,
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
    },
  },
  Address: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  New_Password: {
    type: String,
  },
  New_Again_Password: {
    type: String,
  },
});

module.exports = {
  FormUserModel: mongoose.model("FormUser", FormUser),
};
