const path = require('path');
const baseConfig = require('./webpack.base.conf.js');
const webpack = require('webpack');
const merge = require('webpack-merge');

module.exports = merge(baseConfig, {
  mode: 'development',

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },

  optimization: {
    namedModules: true,
    noEmitOnErrors: true,
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],

  watchOptions: {
    aggregateTimeout: 300,
    ignored: ['dist', 'node_modules'],
    poll: 1000,
  },
});
