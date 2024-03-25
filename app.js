const express = require("express");
require("dotenv").config();
const mongoConnDb = require("./src/database/mongoConnection");
const morgan = require("morgan");
const app = express();
const pizzaRoutes = require("./src/core/event-main/products-scope/pizza/pizza.routes");
const pizzaSalesOrderRoutes = require("./src/core/event-main/sales-scope/pizza-sales-order/pizza-sales-order.routes");
const userRoutes = require("./src/core/event-login/registration-scope/user/user.routes");
const deliveryAddressRoutes = require("./src/core/event-login/registration-scope/delivery-address/delivery-address.routes");

const port = 3000;

app.use(express.json());

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: false }));

app.use("/v1/api/pizza", pizzaRoutes);
app.use("/v1/api/pizzaSales", pizzaSalesOrderRoutes);
app.use("/v1/api/user", userRoutes);
app.use("/v1/api/deliveryAddress", deliveryAddressRoutes);

app.listen(port, () => {
  mongoConnDb().then(() => {
    console.log(`Server is runing on http://localhost:${port}`);
  });
});
