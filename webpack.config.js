'use strict';
var webpack = require('webpack');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: __dirname,
    filename: './public/js/bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /jsx?$/,
        exclude: /(node_modules|assets)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
