var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var env = config.build.env

var webpackConfig = merge(baseWebpackConfig, {
  target: 'node',
  entry: {
    app: './src/server.js'
  },
  devtool: false,
  output: {
    path: config.build.assetsRoot,
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  externals: Object.keys(require('../package.json').dependencies),
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
})

module.exports = webpackConfig
