const path = require("path");

module.exports = {
  mode: "development",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js",
  },
};
