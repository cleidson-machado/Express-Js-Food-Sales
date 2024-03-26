const router = require("express").Router();
const deliveryAddressControllers = require("./delivery-address.controller");
const userAuthMiddleWare = require("../../registration-scope/user-auth/user-auth.middleware");

router.get("/find", userAuthMiddleWare, deliveryAddressControllers.findAll);
router.get(
  "/find/:id",
  userAuthMiddleWare,
  deliveryAddressControllers.findById
);
router.post(
  "/create",
  userAuthMiddleWare,
  deliveryAddressControllers.createOne
);
router.put(
  "/update/:id",
  userAuthMiddleWare,
  deliveryAddressControllers.updateOne
);
router.delete(
  "/delete/:id",
  userAuthMiddleWare,
  deliveryAddressControllers.deleteOne
);

module.exports = router;
