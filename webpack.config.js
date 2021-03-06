"use strict"

const merge = require('webpack-merge');
//const validate = require('webpack-validator');

const PATHS = require('./webpack-paths');
const loaders = require('./webpack-loaders');


const common = {
  entry: {
    app: PATHS.src
  },

  output: {
    path: PATHS.dist,
    filename: 'bundle.js'
  },

  module: {
    rules: [
      loaders.babel, // Transpiler
      loaders.css, // Our bundle will contain the css
      loaders.scss,
      loaders.font,
      loaders.font2
      ]
    },

    resolve: {
    extensions: ['.js', '.jsx'] //the extensions to resolve

  }
};

let config;

switch(process.env.NODE_ENV) {
  case 'build':
  config = merge(
    common,
      { devtool: 'source-map'} //Source maps on separate file
      );
  break;

  case 'development':
  config = merge (
    common,
      {devtool: 'eval-source-map'}, //Default value
      loaders.devServer({
        host: process.env.host,
        port: 3000,
      }));
  break;
}

module.exports = config;