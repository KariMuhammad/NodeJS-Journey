const multer = require("multer");

const storage = multer.diskStorage({
  destination: function () {},
  filename: function () {},
});

const uploader = multer({ storage, fileFilter: function () {} });

module.exports = uploader;
