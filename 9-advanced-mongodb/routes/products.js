const {
  insertSampleProducts,
  fetchProductsStats,
  fetchProductsAnalysis,
} = require("../controllers/product");

const router = require("express").Router();

router.post("/add-samples", insertSampleProducts);
router.get("/stats", fetchProductsStats);
router.get("/analysis", fetchProductsAnalysis);

module.exports = router;
