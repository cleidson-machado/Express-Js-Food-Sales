const router = require("express").Router();
const pizzaSalesOrderController = require("./pizza-sales-order.controller");

router.get("/find", pizzaSalesOrderController.findAll);
router.get("/find/:id", pizzaSalesOrderController.findById);
router.post("/create", pizzaSalesOrderController.createOne);
router.put("/update/:id", pizzaSalesOrderController.updateOne);
router.delete("/delete/:id", pizzaSalesOrderController.deleteOne);

module.exports = router;
