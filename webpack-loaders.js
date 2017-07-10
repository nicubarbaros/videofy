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
  loader: "style-loader!css-loader"
}


exports.scss = {
    test: /\.scss$/,
    loader: 'style-loader!css-loader!sass-loader'
}


// The file loader
exports.font = {
  test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url-loader?limit=10000&mimetype=application/font-woff'
}

exports.font2 = {
   test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader'
}


// Babel loader
exports.babel = {
  test: /\.jsx?$/,
  exclude: /(node_modules|bower_components)/,
  loader: 'babel-loader',
  query: {
    presets: ['react', 'es2015', 'stage-0'],
    plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
  }
};
