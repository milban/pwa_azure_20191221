const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // src index.html -> public index.html

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/public"), // __dirname -> 현재 dir의 절대경로를 해줌.
    filename: "index.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
