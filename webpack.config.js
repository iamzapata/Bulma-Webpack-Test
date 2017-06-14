const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var path = require('path');

module.exports = {
  entry: './app/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'web')
  },

  module: {

  	rules: [

  		{
  			test: /\.s[ac]ss$/,
  			use: ['style-loader', 'css-loader', 'sass-loader']
  		}

  	]

  }

};