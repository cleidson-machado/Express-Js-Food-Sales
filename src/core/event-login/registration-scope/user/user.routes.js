const router = require("express").Router();
const userControllers = require("./user.controller");
const userAuthMiddleWare = require("../user-auth/user-auth.middleware");

router.get("/find", userAuthMiddleWare, userControllers.findAll);
router.get("/find/:id", userAuthMiddleWare, userControllers.findById);
router.post("/create", userControllers.createOne);
router.put("/update/:id", userAuthMiddleWare, userControllers.updateOne);
router.delete("/delete/:id", userAuthMiddleWare, userControllers.deleteOne);

module.exports = router;
