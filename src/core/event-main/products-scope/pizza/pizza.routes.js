const router = require("express").Router();
const pizzaControllers = require("./pizza.controllers");
const userAuthMiddleWare = require("../../../event-login/registration-scope/user-auth/user-auth.middleware");

router.get("/find", userAuthMiddleWare, pizzaControllers.findAll);
router.get("/find/:id", userAuthMiddleWare, pizzaControllers.findById);
router.post("/create", userAuthMiddleWare, pizzaControllers.createOne);
router.put("/update/:id", userAuthMiddleWare, pizzaControllers.updateOne);
router.delete("/delete/:id", userAuthMiddleWare, pizzaControllers.deleteOne);

module.exports = router;
