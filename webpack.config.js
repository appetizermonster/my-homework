const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isDevMode = (process.env.NODE_ENV !== 'production');

const plugins = [
  new HtmlWebpackPlugin({ template: './app/index.html' }),
  new webpack.DefinePlugin({
    IS_DEV_MODE: JSON.stringify(isDevMode)
  })
];

if (isDevMode)
  plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports = {
  entry: './app/index.js',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
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
