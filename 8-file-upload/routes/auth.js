const {
  register,
  login,
  changePassword,
  forget_password,
  reset_password_token,
} = require("../controllers/auth");
const auth = require("../middlewares/auth");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.post("/change-password", auth, changePassword);
router.post("/forget-password", forget_password);
router.post("/reset-password-token", reset_password_token);

module.exports = router;
