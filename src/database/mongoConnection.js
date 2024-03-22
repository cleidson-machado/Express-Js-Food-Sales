const mongoose = require("mongoose");

async function mongoConnDb() {
  let URI_CONN_STRING =
    "mongodb://root:passWd123@localhost:27017/food-sales?authSource=admin";
  await mongoose
    .connect(URI_CONN_STRING, {})
    .then(() => {
      console.log("MONGO DB CONECTED!");
    })
    .catch((err) => {
      return console.log(`Error on Db Connection: ${err}`);
    });
}

module.exports = mongoConnDb;
