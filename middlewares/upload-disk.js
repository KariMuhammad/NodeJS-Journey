const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (request, file, cb) {
    cb(null, __dirname + "/../uploads");
  },

  filename: function (request, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const uploader = multer({
  storage,
  fileFilter: function (request, file, cb) {
    if (!file.mimetype.startsWith("image"))
      return cb(new Error("Not support uploaded file (image only)"));
    cb(null, true);
  },
});

module.exports = uploader;
