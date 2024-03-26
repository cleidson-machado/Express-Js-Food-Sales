const router = require("express").Router();
const userLoginController = require("./user-auth.controller");

router.post("/login", userLoginController.verifyLogin);
router.post("/token-check", userLoginController.verifyToken);

module.exports = router;
