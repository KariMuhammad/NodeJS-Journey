const { response } = require("express");

class APIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.name = "APIError";
    Error.captureStackTrace(this, APIError);
  }

  static badRequest() {
    return new APIError("Bad Request", 401);
  }
}

/**
 *
 * @param {*} asyncFn: RequestHandler accept (req, res, next)
 * @returns
 */
const asyncHandler = (asyncFn) => (request, response, next) => {
  Promise.resolve(asyncFn(request, response, next)).catch(next);
};

const globalErrorHandler = (error, request, response, next) => {
  console.log("Error Received", error);

  if (error instanceof APIError) {
    return response.status(error.statusCode).json({
      message: error.message,
      name: error.name,
    });
  }

  if (error.name === "validationError") {
    return response.status(400).json({
      message: "Validation error",
    });
  }

  response.status(500).json({
    message: "Something went wrong!",
  });
};

module.exports = { APIError, asyncHandler, globalErrorHandler };
