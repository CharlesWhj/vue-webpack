const path = require("path");
// const srcPath = path.join(__dirname, "src");
// 导入vuetemplate插件
const VueloaderPlugin = require("vue-loader/lib/plugin");
// html插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 每次打包清除dist
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
  entry: './src/main.js',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude:/node_modules/,
        loader:"babel-loader"
      },//es6转es5
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  //插件
  plugins: [
    new VueloaderPlugin(),
    new HtmlWebpackPlugin({
      template : './public/index.html'
    }),//自动生成html
    // 清理dist
  new CleanWebpackPlugin()
  ],
};
