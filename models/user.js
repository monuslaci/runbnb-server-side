const mongoose = require("mongoose");
const listing = require("./listing");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },

  listings: [{
    type: Schema.Types.ObjectId,
    ref: "Listing",
  }, ],
});

module.exports = mongoose.model("User", userSchema);