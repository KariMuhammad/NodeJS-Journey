const fs = require("fs");
const path = require("path");

/**
 * ==================== Sync Way ====================
 */

const dataFolder = path.join(__dirname, "data");

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("Created Folder");
} else {
  console.log("Already folder exists!");
}

const filePath = path.join(dataFolder, "example.txt");

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, "Hello World in File!");
}

let fileContent = fs.readFileSync(filePath, "utf-8");
console.log("File Content: ", fileContent);

fs.appendFileSync(filePath, "\nNew line appended");

fileContent = fs.readFileSync(filePath, "utf-8");
console.log("Updated Content: ", fileContent);

/**
 * ==================== Async Way ====================
 */

const asyncFilePath = path.join(dataFolder, "asyncFileExample.txt");
fs.writeFile(asyncFilePath, "Async File Example", (err) => {
  if (err) console.log(err);

  fs.readFile(asyncFilePath, "utf-8", (err, data) => {
    if (err) console.log(err);

    console.log(data);

    fs.appendFile(asyncFilePath, "\nNew Line Appended!", (err) => {
      if (err) console.log(err);

      fs.readFile(asyncFilePath, "utf-8", (err, data) => {
        if (err) console.log(err);

        console.log(data);
      });
    });
  });
});
