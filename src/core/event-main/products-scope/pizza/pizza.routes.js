const router = require("express").Router();
const pizzaControllers = require("./pizza.controllers");

router.get("/find", pizzaControllers.findAll);
router.get("/find/:id", pizzaControllers.findById);
router.post("/create", pizzaControllers.createOne);
router.put("/update/:id", pizzaControllers.updateOne);
router.delete("/delete/:id", pizzaControllers.deleteOne);

module.exports = router;
