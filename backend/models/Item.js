const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  price: {
    type: float,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

// export model item with UserSchema
module.exports = mongoose.model("item", UserSchema);