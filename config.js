module.exports = {
  port: process.env.PORT || 3000,
  jwt_secret_key: process.env.JWT_SECRET_KEY,

  // Database
  atlas_db: {
    username: process.env.ATLAS_USERNAME,
    password: process.env.ATLAS_PASSWORD,
    url: process.env.ATLAS_CONNECTION,
  },

  // cloudinary uploading assets
  cloudinary: {
    url: process.env.CLOUDINARY_URL,
    name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    secret_key: process.env.CLOUDINARY_SECRET_KEY,
  },
};
