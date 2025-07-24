module.exports = {
  port: process.env.PORT || 3000,
  secret_key: process.env.SECRET_KEY,

  // Database
  atlas_db: {
    username: process.env.ATLAS_USERNAME,
    password: process.env.ATLAS_PASSWORD,
    url: process.env.ATLAS_CONNECTION,
  },
};
