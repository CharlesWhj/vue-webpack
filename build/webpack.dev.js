const baseConfig = require("./webpack.common.js");
const {merge} = require("webpack-merge");
const webpack = require('webpack')
const prodConfig = {
  mode: "development",
  devServer: {
    open: true,//自动打开浏览器
    // hot: true,
    // compress: true,
    port: 3000,//端口
    contentBase: './dist'//浏览器打开的包
},
plugins:[
  new webpack.HotModuleReplacementPlugin()
]
};
module.exports = merge(baseConfig, prodConfig);
// console.log(123);
