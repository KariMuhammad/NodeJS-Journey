const cloudinary = require("cloudinary").v2;
const config = require("../config");

cloudinary.config({
  cloud_name: config.cloudinary.name,
  api_key: config.cloudinary.api_key,
  api_secret: config.cloudinary.secret_key,
});

exports.uploadToCloudinary = function uploadToCloudinary(file) {
  return new Promise((res, rej) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder: "demo-images",
          public_id: file.filename,
        },
        (err, result) => {
          if (err) return rej(err);

          return res(result);
        }
      )
      .end(file.buffer);
  });
};
