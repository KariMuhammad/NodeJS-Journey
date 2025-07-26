const express = require("express");
const { createServer } = require("http");
const path = require("path");
const { Server } = require("socket.io");
const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname)));

const users = {};

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("join", (username) => {
    users[socket.id] = username;
    socket.broadcast.emit("system message", `${username} joined the chat`);
    io.emit("user list", Object.values(users));
  });

  socket.on("chat message", (msg) => {
    const user = users[socket.id] || "Anonymous";
    io.emit("chat message", { user, message: msg });
  });

  socket.on("disconnect", () => {
    const username = users[socket.id];
    delete users[socket.id];
    if (username) {
      io.emit("system message", `${username} left the chat`);
      io.emit("user list", Object.values(users));
    }
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
