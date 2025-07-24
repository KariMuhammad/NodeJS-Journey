const userModel = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const config = require("../config");

/**
 * POST /auth/register
 * create new user
 * @param {*} request
 * @param {*} response
 * @param {*} next
 * @returns
 */
exports.register = async (request, response, next) => {
  try {
    console.log("Request Body", request.body);
    const { username, email, password } = request.body;
    const user = await userModel.findOne({
      $or: [{ email }, { username }],
    });

    if (user) {
      // return next(new Error("User is already exists!"))
      throw new Error("User is already exists!");
    }

    const salt = await bcrypt.genSalt(10);
    console.log("Salt = ", salt);

    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = await userModel.create({
      username,
      email,
      password: hashPassword,
      role: "user",
    });

    return response.status(201).json({
      success: true,
      message: "Successfully created new user!",
      data: newUser,
    });
  } catch (error) {
    console.log("Error -> ", error);
    return response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * POST /auth/login
 * login user with email
 * @param {*} request
 * @param {*} response
 * @param {*} next
 * @returns
 */
exports.login = async (request, response, next) => {
  try {
    const { email, password } = request.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      throw new Error("No account registered with this email!");
    }

    if (!bcrypt.compareSync(password, user.password)) {
      throw new Error("Credentials are incorrect!");
    }

    const accessToken = jwt.sign(
      {
        userId: user.id,
        username: user.username,
        role: user.role,
      },
      config.jwt_secret_key,
      {
        expiresIn: "15m",
      }
    );

    // Before send response, we can send refresh token in cookie
    return response.status(200).json({
      success: false,
      message: "User logged in",
      data: user,
      token: accessToken,
    });
  } catch (error) {
    console.log("Error -> ", error);
    response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
