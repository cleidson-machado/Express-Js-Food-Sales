const mongoose = require("mongoose");

async function mongoConnDb() {
  "mongodb://root:passWd123@localhost:27017/food-sales?authSource=admin";
  await mongoose
    .connect(process.env.URIDATABASE, {})
    .then(() => {
      console.log("MONGO DB CONECTED!");
    })
    .catch((err) => {
      return console.log(`Error on Db Connection: ${err}`);
    });
}

module.exports = mongoConnDb;
