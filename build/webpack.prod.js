const baseConfig = require('./webpack.common.js')
const {merge} = require('webpack-merge')
const prodConfig ={
    mode: "production",
}
module.exports = merge(baseConfig,prodConfig)
  // console.log(456);