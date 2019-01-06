const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const constants = require("./constants");

const { SRC_DIR, DIST_DIR, PUBLIC_ASSETS_DIR, ROOT_DIR } = constants;

module.exports = {
  entry: SRC_DIR,
  output: { filename: "bundle.js", path: DIST_DIR },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: { loader: "babel-loader" }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([DIST_DIR], { root: ROOT_DIR }),
    new CopyWebpackPlugin([{ from: PUBLIC_ASSETS_DIR, to: DIST_DIR }])
  ]
};
