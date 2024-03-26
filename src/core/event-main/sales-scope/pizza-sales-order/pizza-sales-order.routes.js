const router = require("express").Router();
const pizzaSalesOrderController = require("./pizza-sales-order.controller");
const userAuthMiddleWare = require("../../../event-login/registration-scope/user-auth/user-auth.middleware");

router.get("/find", userAuthMiddleWare, pizzaSalesOrderController.findAll);
router.get("/find/:id", userAuthMiddleWare, pizzaSalesOrderController.findById);
router.post("/create", userAuthMiddleWare, pizzaSalesOrderController.createOne);
router.put(
  "/update/:id",
  userAuthMiddleWare,
  pizzaSalesOrderController.updateOne
);
router.delete(
  "/delete/:id",
  userAuthMiddleWare,
  pizzaSalesOrderController.deleteOne
);

module.exports = router;
