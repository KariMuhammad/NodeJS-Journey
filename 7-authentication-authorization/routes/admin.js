const router = require("express").Router();

const auth = require("../middlewares/auth");
const only = require("../middlewares/only");

// 1#
// router.use(auth);

router.get("/dashboard", /* 2# */ auth, only("admin"), (req, res) => {
  res.json({
    message: "Welcome to Admin Dashboard",
  });
});

module.exports = router;
