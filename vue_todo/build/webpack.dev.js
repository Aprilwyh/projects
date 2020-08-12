const baseConfig = require('./webpack.base.js')
const { merge } = require('webpack-merge')

// 引入webpack插件
const webpack = require('webpack')

const devConfig = {
  mode: 'development', // 开发环境
  devtool: 'eval',
  devServer: {
    // 指定服务器根目录
    contentBase: './dist',
    // 自动打开浏览器
    open: true,
    // 启用热模块替代
    hot: true
  },
  // 插件
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
module.exports = merge(baseConfig, devConfig)