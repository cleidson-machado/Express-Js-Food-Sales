const express = require("express");
require("dotenv").config();
const mongoConnDb = require("./src/database/mongoConnection");
const morgan = require("morgan");
const app = express();
const pizzaRoutes = require("./src/core/event-main/products-scope/pizza/pizza.routes");
const pizzaSalesOrderRoutes = require("./src/core/event-main/sales-scope/pizza-sales-order/pizza-sales-order.routes");
const userRoutes = require("./src/core/event-login/registration-scope/user/user.routes");
const deliveryAddressRoutes = require("./src/core/event-login/registration-scope/delivery-address/delivery-address.routes");
const userLoginRoute = require("./src/core/event-login/registration-scope/user-auth/user-auth.routes");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./src/swagger-output.json"); //## HERE! AUTO GENERATION!

const port = 3000;

app.use(express.json());

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: false }));

//## API ROUTES
app.use("/v1/api/pizza", pizzaRoutes);
app.use("/v1/api/pizzaSales", pizzaSalesOrderRoutes);
app.use("/v1/api/user", userRoutes);
app.use("/v1/api/deliveryAddress", deliveryAddressRoutes);
app.use("/v1/api/auth", userLoginRoute);

//## HERE Start the Swagger Document API
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  mongoConnDb().then(() => {
    console.log(`Server is runing on http://localhost:${port}`);
  });
});
