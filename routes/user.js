const express = require("express");
const {
  register,
  activateAccount,
  login,
} = require("../controller/user-controller");
const router = express.Router();

router.post("/register", register);
router.post("/activate", activateAccount);
router.post("/login", login);

module.exports = router;