"use strict";

const path = require('path');
// We define some paths to be used throughout the webpack config
module.exports = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
  css: path.join(__dirname, 'client/dist/css')
};