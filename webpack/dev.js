const merge = require("webpack-merge");
const webpack = require("webpack");

const common = require("./common.js");
const { DIST_DIR, DEV_PORT } = require("./constants");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: DEV_PORT,
    overlay: true,
    contentBase: DIST_DIR,
    watchContentBase: true,
    hot: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
