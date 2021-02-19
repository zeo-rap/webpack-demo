const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "static/index_bundle.[chunkhash].js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/[chunkhash].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
