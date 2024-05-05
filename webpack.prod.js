const path = require("path");

const commonConfig = require("./webpack.common");

//  ### combine common webpack config with current webpack config
const { merge } = require("webpack-merge");

// ### this plugin is used to perform minification on JS/CSS or any other specified files
const TerserWebpackPlugin = require("terser-webpack-plugin");

// ### this plugin is used to compress the resultant output bundles
// ### this plugin is useful ti append certain appended files to index.html
// ### for example, after using compression, thuis plugin will append .gz or .br bundled files into index.html
const CompressionWebpackPlugin = require("compression-webpack-plugin");

// const HtmlAssetWebpackPlugin = require('html-webpack-change-assets-extension-plugin)
const CopyPlugin = require("copy-webpack-plugin");

// ### webpack finds any resource that can be fetched from CDN rather than creating a separate bundle for ut during optimization of bundles
// const DynamicCDNPlugin = require('dynamic-cdn-plugin)

// ### Clean webpack clears old `contentHash` files
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// ### Extract CSS into files rathen than linking dynamically and create a lag in loading
const MiniCssAssetsPlugin = require("mini-css-extract-plugin");

// ### Optimize CSS files before bundling
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const pluginList = [
  new CleanWebpackPlugin(),
  new OptimizeCSSAssetsPlugin(),
  new MiniCssAssetsPlugin({ filename: "[name].[contentHash].css" }),
  new TerserWebpackPlugin({
    extractComments: true,
    parallel: true,
    minify: TerserWebpackPlugin.uglifyJsMinify,
    // `terserOptions` options will be passed to `uglify-js`
    // Link to options - https://github.com/mishoo/UglifyJS#minify-options
    terserOptions: {},
  }),
];

module.exports = merge(commonConfig, {
  mode: "production",
  output: {
    path: path.join(__dirname, "/build"),
    // ### name in square brackets indicates multiple entry points
    // ### contentHash indicates a new bundle file being created after build and helps in caching in case file didn't change
    filename: "[name].[contentHash].bundle.js",
    chunkFilename: "[name].[contentHash].bundle.js",
    // publicPath: '/'
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      minSize: 20000,
      maxSize: 200000,
      maxAsyncRequests: Infinity,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          minSize: 20000,
          maxSize: 200000,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\css$/,
        use: [
          MiniCssAssetsPlugin.loader, // 2. Extract css into files
          "css-loader", // 1. Turns css into commonjs
        ],
      },
    ],
  },
  plugins: pluginList,
});
