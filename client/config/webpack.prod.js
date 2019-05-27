const path = require('path');
const baseConfig = require('./webpack.base.conf.js');
const webpack = require('webpack');
const merge = require('webpack-merge');

module.exports = merge(baseConfig, {
  mode: 'production',
});
