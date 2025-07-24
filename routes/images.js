const multer = require("multer");
const { getImages, addImage } = require("../controllers/image");
const auth = require("../middlewares/auth");
const only = require("../middlewares/only");

const router = require("express").Router();

// Uploading settings
const storage = multer.memoryStorage();
const uploader = multer({ storage }).single("image");

router.use(uploader);

router.get("/", getImages);
router.post("/", auth, only("admin"), addImage);

module.exports = router;
