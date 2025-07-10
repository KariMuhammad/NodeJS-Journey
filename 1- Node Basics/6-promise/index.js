const fs = require("fs/promises");
// const promisify = require()

// ready promsified versions for node libs
// we can promisify also any function in these libs by pkg "promisify"
// https://www.npmjs.com/package/promisify

// fs.readFile("../5-callback/index.js", "utf-8")
//   .then((data) => {
//     console.log(
//       "\n ====================== Data ======================\n",
//       data
//     );
//   })
//   .catch((error) => {
//     console.log("Error", error);
//   });

function delayFn(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function divideFn(n1, n2) {
  return new Promise((resolve, reject) => {
    if (n2 === 0) return reject("[Error] cannot divide by 0");
    resolve("[Result]", n1 / n2);
  });
}

divideFn(1, 2).then(console.log).catch(console.log);
divideFn(1, 0).then(console.log).catch(console.log);
