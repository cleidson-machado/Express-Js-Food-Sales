const mongoose = require("mongoose");

const pizzaSaleOrderSchema = new mongoose.Schema(
  {
    pizzas: [{ type: mongoose.Schema.Types.ObjectId, ref: "pizza" }],
    payment: { type: Number, require: true },
    paymentType: {
      type: String,
      default: "CASH",
      enum: [
        "Credit-Card",
        "Debit-Card",
        "Meal-Ticket",
        "Voucher",
        "Donation",
        "Bra-Pix",
      ],
    },
    buyer: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    status: {
      type: String,
      default: "Preparing-In-The-Oven",
      enum: ["Preparation-Finished", "On-the-way", "Delivery-Done"],
    },
    sellerName: { type: String, require: false, default: "System" },
  },
  {
    timestamps: true, //HERE TO AUTO createdAt AND updatedAt INFODATA...
  }
);

const PizzaSaleOrderMongooseModel = mongoose.model(
  "pizzaSaleOrder",
  pizzaSaleOrderSchema
);

module.exports = PizzaSaleOrderMongooseModel;
