const express = require("express");
const app = express();

const configureCors = require("./src/config/cors-config");

const {
  setTimestampToHeader,
  requestLogger,
} = require("./src/middlewares/requestLogger");

const {
  asyncHandler,
  APIError,
  globalErrorHandler,
} = require("./src/error-handling");

const appVersion1 = require("./src/versions/v1");
const { urlVersioning } = require("./src/apiVersioning");

app.use(express.json());
app.use(configureCors());

app.use(setTimestampToHeader, requestLogger);

app.get("/welcome", (req, res) => {
  res.status(200).send("Welcome API");
});

app.get(
  "/test-errors",
  asyncHandler(async (req, res, next) => {
    // throw new Error("Test test Error");
    throw new APIError("API Error Thrown", 300);

    // res.send("All is OK!");
  })
);

// app.use("/api/v1", urlVersioning("v1")); // req.url will be what after `/api/v1/`
app.use(urlVersioning("v1"));

// App Routes
app.use(appVersion1);

// Global Error Handler
app.use(globalErrorHandler);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
