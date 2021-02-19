const path = require("path");

module.exports = {
  mode: "development",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name]index_bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
