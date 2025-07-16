const express = require("express");
const path = require("path");

const app = express();

// console.log(__dirname);
//https://stackoverflow.com/a/12167582
// app.set("views", __dirname + "/templates"); // Won't Work ! windows don't use `/`
// app.set("views", __dirname + "\\templates"); // Work! windows uses forward slash `\`

// if you want to make function handle these based on OS run app, use `path.join()`
app.set("views", path.join(__dirname, "/templates"));
app.set("view engine", "ejs");

const products = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
];

app.use((req, res, next) => {
  console.log(`visited: ${req.url} in time: ${new Date().toLocaleString()}`);
  next();
});

app.get("/", (req, res, next) => {
  console.log("Welcome in home page");
  //   res.send("Welcome in Home Page");
  res.render("./home.ejs", {
    page_name: "Home Page",
  });
});

app.get("/about", (req, res, next) => {
  console.log("Welcome in about page");
  res.render("./about.ejs", { page_name: "About Page" });
});

app.get("/shop", (req, res, next) => {
  console.log("Welcome in home page");
  //   res.send("Welcome in Home Page");
  res.render("./products.ejs", {
    page_name: "Shop page",
    products: products,
  });
});

app.listen(3000, (error) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log("Server now is listening in port 3000");
});
