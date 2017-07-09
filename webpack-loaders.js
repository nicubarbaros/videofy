"use strict";

const webpack = require('webpack');
const PATHS = require('./webpack-paths');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.devServer = function(options) {
  return {
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      stats: 'errors-only',
            host: options.host, // http://localhost
            port: options.port, // 3000
            contentBase: './dist',
          },

          plugins: [
          new ExtractTextPlugin("style.css"),
          new webpack.HotModuleReplacementPlugin({
            multistep: true
          })
          ]
        };
      }

// the css loader
exports.css = {
  test: /\.css$/,
  loaders: ['style-loader', 'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'],
}


// exports.scss = {
//   test: /\.scss$/,
//   loaders: ['style-loader', 'css-loader?modules&importLoader=2&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader' ]
// }


// Babel loader
exports.babel = {
  test: /\.jsx?$/,
  exclude: /(node_modules|bower_components)/,
  loader: 'babel-loader',
  query: {
    plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
  }
};
