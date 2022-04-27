const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  displayname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  purchasedItems: {
    type: Array,
    required: false
  },
  amountsOwed: {
    type: [float],
    required: false
  },
  amountsDue: {
    type: [float],
    required: false
  },
  profilepic: {
      type: String,
      required: false,
      default: ""
  }
});

// export model user with UserSchema
module.exports = mongoose.model("user", UserSchema);