const path = require('path');

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: './index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  }
}