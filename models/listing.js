const mongoose = require("mongoose");
const User = require("./user");
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
  saleOrRent: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "incative",
  },
  address: {
    type: String,
    required: true,
  },
  imageURLs: {
    type: Array,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  propertyType: {
    type: String,
    required: true,
  },
  accessibility : {
    type: String,
    required: true,
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
  landSize: {
    type: Number,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  livingroom: {
    type: Number,
    required: true,
  },
  balcony: {
    type: Boolean,
    required: false,
  },
  floor: {
    type: Number,
    required: true,
  },
  elevator: {
    type: Boolean,
    required: true,
  },
  view: {
    type: String,
    required: true,
  },
  ac: {
    type: Boolean,
    required: true,
  },
  heating: {
    type: String,
    required: true,
  },
  furnished: {
    type: Boolean,
    required: true,
  },
  condition: {
    type: String,
    required: true,
  },
  features: {
    type: Array,
    required: false,
  }
});

module.exports = mongoose.model("Listing", listingSchema);


