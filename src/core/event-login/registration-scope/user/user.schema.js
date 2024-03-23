const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      uppercase: true,
      required: [true, "The Name is Mandatory!"],
    },
    surname: {
      type: String,
      uppercase: true,
      required: [true, "The Surname is Mandatory!"],
    },
    age: {
      type: Number,
      min: 18,
      max: 65,
      required: [false],
    },
    bodyheight: {
      type: Number,
      required: [false],
    },
    gender: {
      type: String,
      required: [false],
    },
    cpf: {
      type: String,
      unique: true,
      required: [true, "The CPF is Mandatory!"],
    },
    email: {
      type: String,
      lowercase: true,
      match: /.+\@.+\..+/,
      unique: true,
      required: [true, "The Email is Mandatory!"],
    },
    password: {
      type: String,
      required: [true, "The Password is Mandatory!"],
    },
    levelAccess: {
      type: [String],
      default: "USER-Level",
      enum: ["ROOT-Level", "ADMIN-Level", "GUEST-Level"],
      required: [false], // change to ENUN'S!??
    },
  },
  {
    timestamps: true, //HERE TO AUTO createdAt AND updatedAt INFODATA...
  }
);

const UserMongooseModel = mongoose.model("user", userSchema);

module.exports = UserMongooseModel;
