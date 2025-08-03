const fs = require("fs");
const crypto = require("crypto");

console.log("[1] Script Starts");

setTimeout(() => {
  console.log("[2] setTimeout() callback");
}, 0);

setImmediate(() => {
  console.log("[3] setImmediate callback");
});

setTimeout(() => {
  console.log("[4] setTimeout() callback");
}, 0);

Promise.resolve().then(() => {
  console.log("[5] Promise Callback");
});

process.nextTick(() => {
  console.log("[6] process.nextTick() callback");
});

fs.readFile(__filename, () => {
  console.log("[7] fs.readFile callback");

  setImmediate(() => console.log("[8] setImmediate callback after I/O"));
  setTimeout(() => console.log("[9] setTimeout callback after I/O"));
});

crypto.pbkdf2("password", "salt", 1000, 10, "sha512", (err, key) => {
  console.log("[10] crypto.pbkdf2() callback ");
});

console.log("[11] Script Ends");

/** NOTE:
 * setImmediate executes Immediatly after I/O Operation and before setTimeout
 * but It is executed before setTimeout in case they are outside of I/O operation
 */
