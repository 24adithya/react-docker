const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  externals: {
    // jquery:'jQuery'
    // react: 'React'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // match both .js and .jsx files
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        // ### called for every html file, webpack encounters. In our case, `html-loader` will be called for index.html.
        // ### we can minify the html if needed but as of now, it's only a starting point for other loaders i.e.
        // ### if it has any images then its loader will be called first and later the `file-loader` for images and
        // ### other loaders if needed
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        // ### whenever webpack encounters any of these image files, it wull use the file-loader and rename it according
        // ### to the name format specified
        test: /\.(ico|png|eot|svg|ttf|woff|woff2|jpe?g)$/,
        use: {
          loader: "file-loader",
          options: {
            interpolate: true,
            name: "[name].[hash].[ext]",
            outputPath: "./assets/images",
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: "./src/index.html",
      favicon: "./src/assets/images/logo.svg",
      // jsExtension: ['.gz']// we will add this post compression
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      React: "react",
    }),
  ],
};
