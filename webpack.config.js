const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var path = require('path');

module.exports = {
  entry: {

  	app: './app/index.js'

  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'web')
  },

  module: {

  	rules: [

  		{
  			test: /\.s[ac]ss$/,
  			use: ExtractTextPlugin.extract({
  				use: ['css-loader', 'sass-loader'],
  				fallback: 'style-loader'
  			})
  		}

  	]

  }, 

  plugins: [
  	new ExtractTextPlugin('[name].css')
  ]

};