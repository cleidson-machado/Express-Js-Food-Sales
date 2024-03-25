const router = require("express").Router();
const deliveryAddressControllers = require("./delivery-address.controller");

router.get("/find", deliveryAddressControllers.findAll);
router.get("/find/:id", deliveryAddressControllers.findById);
router.post("/create", deliveryAddressControllers.createOne);
router.put("/update/:id", deliveryAddressControllers.updateOne);
router.delete("/delete/:id", deliveryAddressControllers.deleteOne);

module.exports = router;
