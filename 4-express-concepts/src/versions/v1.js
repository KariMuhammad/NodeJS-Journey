const { rateLimiter } = require("../rate-limiting");

const router = require("express").Router();

router.use(rateLimiter(2, 60000)); // 2 requests per IP each 1 minute

router.get("/api/v1/welcome", (req, res) => {
  res.send("Welcome to Version");
});

module.exports = router;
