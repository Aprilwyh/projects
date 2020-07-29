// 导入path模块
const path = require('path')

module.exports = {
  // 打包入口
  enter: './src/main.js',
  // 打包出口
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}