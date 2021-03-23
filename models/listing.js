const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  saleOrRent: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  imageURLs: {
    type: Array,
    required: false,
  },
  discription: {
    type: String,
    required: true,
  },
  features: {
    type: Array,
    required: false,
  },

  price: {
    type: Number,
    required: true,
  },
  commonCost: {
    type: Number,
    required: true,
  },
  utilities: {
    type: Number,
    required: true,
  },

  size: {
    type: Number,
    required: true,
  },
  numberOfRooms: {
    type: Number,
    required: true,
  },
  floor: {
    type: Number,
    required: true,
  },
  elevator: {
    type: Boolean,
    required: true,
  },
  ac: {
    type: Boolean,
    required: true,
  },
  user: { type: mongoose.ObjectId, ref: "User", required:true },
});

module.exports = mongoose.model("Listing", listingSchema);


