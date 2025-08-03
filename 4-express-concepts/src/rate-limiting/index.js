const { default: rateLimit } = require("express-rate-limit");

const rateLimiter = (maxRequests, perTime) => {
  return rateLimit({
    // store: mongo, redis, default
    limit: maxRequests,
    windowMs: perTime || 2 * 60 * 1000,
    standardHeaders: true,
    legacyHeaders: false,
    message: "Too many requests, please try again later",
  });
};

module.exports = { rateLimiter };

/**
 * How server persist data for user like remaining requests and time to retry?
 * https://chatgpt.com/c/688fde28-3a9c-800f-bf58-db043dcba8f7
 *
 * rate-limiter uses memory of server to store this data ["IP-Address": { limit: 2, timestamp: <>}]
 * we can customize this and use mongodb or redis if we wanted to share these IP addresses to all servers we have
 * otherwise if this server restart all IPAddresses which stored will be lost
 */
