const mongoose = require("mongoose");

// Tracks which receipt it’s from 
// Associated price 

const ItemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: float,
    required: true,
  },
  peoples: {
    type: Array,
    required: false
  },
  // createdAt: {
  //   type: Date,
  //   required: true
  // }
});
// people should be an array of users that have this purchase in their dues/debt 

// export model item with PurchaseSchema
module.exports = mongoose.model("item", ItemSchema);