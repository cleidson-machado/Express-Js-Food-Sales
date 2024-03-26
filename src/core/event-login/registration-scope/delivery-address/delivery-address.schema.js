const mongoose = require("mongoose");

const deliveryAddressSchema = new mongoose.Schema({
  streetAddress: {
    type: String,
    unique: false,
    uppercase: true,
    required: [true, "The streetAddress is Mandatory!"],
  },
  plusAddressInfo: {
    type: String,
    unique: false,
    uppercase: true,
    required: [false],
  },
  city: {
    type: String,
    unique: false,
    uppercase: true,
    required: [true, "The City is Mandatory!"],
  },
  state: {
    type: String,
    unique: false,
    uppercase: true,
    required: [true, "The State is Mandatory!"],
  },
  country: {
    type: String,
    unique: false,
    uppercase: true,
    required: [false],
  },
  postalCode: {
    type: String,
    unique: false,
    uppercase: true,
    required: [false],
  },
  typeOfAddress: {
    type: [String],
    enum: ["HOUSE-1", "HOUSE-2", "WORK-1", "WORK-2"],
    default: "HOUSE-1",
    required: [false],
  },
  distanceLevel: {
    type: [String],
    enum: ["Close-to-me", "Half-distance", "Very-so-far", "Unreachable"],
    default: "Close-to-me",
    required: [false],
  },
  addressOwnerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    require: true,
  },
});

const DeliveryAddressModel = mongoose.model(
  "deliveryAddressLocation",
  deliveryAddressSchema
);

module.exports = DeliveryAddressModel;
