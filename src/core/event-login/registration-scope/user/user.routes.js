const router = require("express").Router();
const userControllers = require("./user.controller");

router.get("/find", userControllers.findAll);
router.get("/find/:id", userControllers.findById);
router.post("/create", userControllers.createOne);
router.put("/update/:id", userControllers.updateOne);
router.delete("/delete/:id", userControllers.deleteOne);

module.exports = router;
