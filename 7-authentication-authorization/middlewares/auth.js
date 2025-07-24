const jwt = require("jsonwebtoken");
const config = require("../config");

module.exports = function auth(req, res, next) {
  try {
    const authorizationHeader = req.headers.authorization;

    // Check if Authorization header exists
    if (!authorizationHeader) {
      throw new Error("Authorization is empty!");
    }

    const authorizationToken = authorizationHeader.split(" ")[1];
    console.log("Token = ", authorizationToken);

    const verifiedToken = jwt.verify(
      authorizationToken,
      config.jwt_secret_key,
      {
        ignoreExpiration: true, // temporary
      }
    );
    console.log("Verified Token =", verifiedToken);

    // Check expiration time for token
    console.log("JWT Expire", verifiedToken.exp);
    console.log("Current time", Math.floor(Date.now() / 1000));

    if (verifiedToken.exp <= Math.floor(Date.now() / 1000)) {
      throw new Error("Token is expired!");
    }

    req.user = verifiedToken;

    // current user is authenticated, but still not check its `role`
    next();
  } catch (error) {
    console.log("Error -> ", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
