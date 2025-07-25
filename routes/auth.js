const { register, login, changePassword } = require("../controllers/auth");
const auth = require("../middlewares/auth");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.post("/change-password", auth, changePassword);

module.exports = router;
