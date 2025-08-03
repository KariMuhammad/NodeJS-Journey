const cors = require("cors");

// All Client Origin who can access my Backend
const whitelistOrigins = [
  "http://localhost:5000",
  "https://mycustomdomain.com",
];

const configureCors = () => {
  return cors({
    origin: (origin, callback) => {
      // Origin can be undefiend in case server-to-server calls (postman, curl)
      // But Always calls from browser enforce send `Origin` header to request
      if (!origin) {
        // Allow tools like Postman or internal servers
        callback(null, true);
      } else if (whitelistOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },

    methods: ["GET", "POST", "PATCH", "DELETE"],

    // Will be sendable in the request to server
    allowedHeaders: ["Content-Type", "Authorization", "Access-Version"],
    // Will be visible/accessabe in response
    exposedHeaders: ["X-Total-Views"],
    // !important, it enable cookie usage in your application
    // When using CORS, if your frontend wants to send cookies
    credentials: true,

    // preflight
    preflightContinue: false, // by default (handled by cors by default)
    maxAge: 60 * 10, // cache preflight repsonse `options` (10 minutes), avoid sending `options` requests multiple times
  });
};

/** ------------ [preflightContinue] -----------
 * …it first sends a preflight request using the OPTIONS method to ask the server:
    “Is it OK if I send this request?”
    If the server says "yes" (by returning the right headers), the browser proceeds to send the actual request.

    if preflightCotinue: false
    - The cors middleware handles the OPTIONS preflight request and ends the response automatically.
    - You usually don’t need to handle it yourself.

    if preflightContinue: true
    - You want to handle OPTIONS requests yourself.
 */

module.exports = configureCors;
