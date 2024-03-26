const mongoose = require("mongoose");

const pizzaSaleOrderSchema = new mongoose.Schema(
  {
    paymentTotal: { type: Number, min: 1, max: 3000, require: true }, //total amount payable...
    paymentType: {
      type: String,
      enum: [
        "CASH",
        "Credit-Card",
        "Debit-Card",
        "Meal-Ticket",
        "Voucher",
        "Donation",
        "Bra-Pix",
      ],
      default: "CASH",
    },
    status: {
      type: String,
      enum: [
        "Preparing-In-The-Oven",
        "Preparation-Finished",
        "On-the-way",
        "Delivery-Done",
      ],
      default: "Preparing-In-The-Oven",
    },
    deliveryPrice: {
      type: Number,
      min: 1,
      max: 1000,
      required: [true, "The Delivery Price is Mandatory!"],
    },
    sellerName: { type: String, require: false, default: "System" },
    isBuyerGivesUp: { type: Boolean, require: false, default: false },
    buyer: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "users",
          require: true,
        },
      },
    ],
    //This is ashopping cart..
    pizzaItem: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "pizzas",
          require: true,
        },
        numberOfItems: {
          type: Number,
          min: 1,
          max: 1000,
          required: [true, "The numberOfItems Price is Mandatory!"],
        },
      },
    ],
  },
  {
    timestamps: true, //HERE TO AUTO createdAt AND updatedAt INFODATA...
  }
);

const PizzaSalesOrderSchema = mongoose.model(
  "pizzaSaleOrder",
  pizzaSaleOrderSchema
);

module.exports = PizzaSalesOrderSchema;
