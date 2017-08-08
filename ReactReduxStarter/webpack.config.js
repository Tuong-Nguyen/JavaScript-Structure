const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'main.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.scss$/, use: ['style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader']},
      { test: /\.(png|jpg|gif)$/, use: [{loader: 'url-loader', options: { limit:  8192 }}] }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public')
  },
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  }
}