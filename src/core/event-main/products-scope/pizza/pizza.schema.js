const mongoose = require("mongoose");

const pizzaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      uppercase: true,
      required: [true, "The Name is Mandatory!"],
    },
    description: {
      type: String,
      unique: false,
      lowcase: true,
      required: [false],
    },
    price: {
      type: Number,
      min: 1,
      max: 1000,
      required: [true, "The Name is Mandatory!"],
    },
    averageWeight: {
      type: Number,
      min: 1,
      max: 1000,
      required: [false], // Peso Médio!
    },
    averageCalories: {
      type: Number,
      min: 1,
      max: 10000,
      required: [false], // Calorias Médias!
    },
    type: {
      type: [String],
      enum: [
        "NORMAL",
        "Especial",
        "Econômica",
        "Doce",
        "Cone",
        "Fechada-Calzone",
      ],
      default: "NORMAL",
      required: [false],
    },
    size: {
      type: [String],
      enum: ["G-Big-Size", "P-Small-Size", "M-Medium-Size", "F-Family-Size"],
      default: "G-Big-Size",
      required: [false],
    },
    filledEdge: {
      type: Boolean,
      default: false,
      required: [false], //Borda Recheada?
    },
  },
  {
    timestamps: true, //HERE TO AUTO createdAt AND updatedAt INFODATA...
  }
);

const PizzaMongooseModel = mongoose.model("pizza", pizzaSchema);

module.exports = PizzaMongooseModel;
