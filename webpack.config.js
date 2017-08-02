const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }, {
        test: /\.css?/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }, {
        test: /\.(png|jpg|gif)$/,
        use: 'url-loader?limit=1000'
      }, {
        test: /\.(svg|woff2?|ttf|eot)$/,
        use: 'file-loader'
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
