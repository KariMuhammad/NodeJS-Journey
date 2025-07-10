const http = require("http");

const server = http.createServer((request, response) => {
  console.log("Request", request);

  response.writeHead(200, "Cool", { "Content-Type": "text/plain" });
  response.end("Wecome to my HTTP Server");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is now listening to port ${PORT}`);
});
