const router = require("express").Router();
const auth = require("../middlewares/auth");

router.get("/welcome", auth, (req, res) => {
  res.json({
    message: "Welcome to Home page",
  });
});

module.exports = router;
