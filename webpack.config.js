
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/index.html',
  filename: 'index.html',
  inject: 'body'
})
module.exports = {
  entry: {
    js: './app-redux/index.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: './js/app.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "file-loader?name=[name].[ext]"
      },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["react-hot-loader", 'babel-loader?'+JSON.stringify(
          {
            presets: ['react', 'es2015'],
            "plugins": [
              "syntax-class-properties",
              "syntax-decorators",
              "syntax-object-rest-spread",
              "transform-class-properties",
              "transform-object-rest-spread"
            ]
          }
        )]
      }
    ]
  }
};