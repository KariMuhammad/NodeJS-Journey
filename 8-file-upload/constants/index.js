const fs = require("fs");

const resetPasswordHtml = fs.readFileSync(
  __dirname + "/../templates/reset-password.html",
  "utf8"
);

module.exports = { resetPasswordHtml };
