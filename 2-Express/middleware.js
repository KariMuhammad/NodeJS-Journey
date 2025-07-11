const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log(`visited: ${req.url} in time: ${new Date().toLocaleString()}`);
  next();
});

app.get("/", (req, res, next) => {
  console.log("Welcome in home page");
  res.send("Welcome in Home Page");
});

app.get("/about", (req, res, next) => {
  console.log("Welcome in about page");
  res.send("Welcome in About Page");
});

app.listen(3000, (error) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log("Server now is listening in port 3000");
});
