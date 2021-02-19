const path = require("path");

module.exports = {
  mode: "production",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.[chunkhash].js",
  },
};
