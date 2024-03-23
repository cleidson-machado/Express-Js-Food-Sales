const express = require("express");
const mongoConnDb = require("./src/database/mongoConnection");
const morgan = require("morgan");
const app = express();
const pizzaRoutes = require("./src/core/event-main/products-scope/pizza/pizza.routes");

const port = 3000;

app.use(express.json());

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: false }));

app.use("/v1/api/pizza", pizzaRoutes);

app.listen(port, () => {
  mongoConnDb().then(() => {
    console.log(`Server is runing on http://localhost:${port}`);
  });
});
