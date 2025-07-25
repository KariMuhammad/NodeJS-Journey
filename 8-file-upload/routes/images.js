const multer = require("multer");
const {
  getImages,
  addImage,
  getPaginatedImages,
} = require("../controllers/image");
const auth = require("../middlewares/auth");
const only = require("../middlewares/only");
const uploader = require("../middlewares/upload-disk");

const router = require("express").Router();

// Uploading settings (Memory Storage)
// const storage = multer.memoryStorage();
// const uploader = multer({ storage }).single("image");

router.use(uploader.single("image"));

router.get("/", getImages);
router.get("/paginated", getPaginatedImages);
router.post("/", auth, only("admin"), addImage);

module.exports = router;
