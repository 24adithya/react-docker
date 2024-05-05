const path = require("path");
// const express = require("express");
// const proxySettings = require("./webpackTasks/middlewareProxy.js");
const proxyPaths = require("./webpackTasks/webpackProxy");
const commonConfig = require("./webpack.common");

//  ### combine common webpack config with current webpack config
const { merge } = require("webpack-merge");

// const app = express();

// Initialize proxy middleware
// proxySettings(app);

module.exports = merge(commonConfig, {
  mode: "development",
  output: {
    path: path.join(__dirname, "/build"),
    // ### name in square brackets indicates multiple entry points
    // ### contentHash indicates a new bundle file being created after build and helps in caching in case file didn't change
    filename: "[name].bundle.js",
    // publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", // 2. Inject styles into DOM
          "css-loader", // 1. Turns css into commonjs
        ],
      },
    ],
  },
  optimization: {
    minimize: false, // Disable minification
  },
  // ...
  devServer: {
    proxy: proxyPaths,
    port: 8082,
    historyApiFallback: true,
  },
});
