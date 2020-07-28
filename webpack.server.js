const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const webpackNodeExternals = require('webpack-node-externals');

const config = {
 // Inform webpack the were building a bundle for nodejs rether than for the browser
 target: 'node',


 // tell webpack the root file of our server application
 entry: './src/index.js',

 // tel webpack to put output file that is generated
 output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'build') 
 },

 externals: [webpackNodeExternals()]
}


module.exports = merge(baseConfig, config);