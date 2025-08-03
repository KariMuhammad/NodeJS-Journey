const setTimestampToHeader = (request, response, next) => {
  request.timestamp = new Date().toISOString();
  next();
};

const requestLogger = (request, response, next) => {
  const timestamp = request.timestamp;
  const method = request.method;
  const url = request.url;
  const userAgent = request.headers["user-agent"];

  console.log(`[${timestamp}] ${method} ${url} : ${userAgent}`);
  next();
};

module.exports = { requestLogger, setTimestampToHeader };
