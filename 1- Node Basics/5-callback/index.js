const fs = require("fs");

function person(name, callbackFn) {
  callbackFn(name);
}

function handleNamePerson(name) {
  console.log("My name is " + name);
}

person("Karim", handleNamePerson);

// ==========================================================================

fs.writeFile("./hell-.txt", "Greeting in English", (err) => {
  if (err) console.log(err);

  fs.readFile("./hello.txt", "utf8", (err, data) => {
    //  nested callback (callback hell)
    // can we overcome this problem? Yeah! with Promises
  });
});
