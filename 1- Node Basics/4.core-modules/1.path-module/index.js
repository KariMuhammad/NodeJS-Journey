const path = require("path");

// 0. Get File Path
console.log("__Filename path", __filename);

// 1. Get Only Directory File path [MOST USED]
console.log("Directory Path");
console.log(path.dirname(__filename));

// 2. Get Only File Name (Not path)
console.log("File name");
console.log(path.basename(__filename));

// 3. Get Only Extension File
console.log("Extension File");
console.log(path.extname(__filename));

// 4. Join Multiple Paths in single absolute path [MOST USED]
console.log("Join Multiple Absolute paths");
// const joinedPath = path.join("/level-1", "level-2", "level-3");
const joinedPath = path.join("level-1", "level-2", "level-3");
console.log(joinedPath);

// 5. Resolve (Join Relative to current directory) multiple paths in single path [IMPORTANT]
console.log("Join with Relative paths");
// const resolvedPath = path.resolve("/level-1", "level-2", "level-3");
const resolvedPath = path.resolve("level-1", "level-2", "level-3");
console.log(resolvedPath);

// 6. Normalize Path
console.log("Normalize paths");
const normalizedPath = path.normalize("/images/./blogs/../users/profile.png");
console.log(normalizedPath);
