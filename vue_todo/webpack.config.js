// 导入node的path模块
const path = require('path')

// 引入vue-loader的插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  // mode: 'production', // 生产环境
  mode: 'development', // 开发环境
  // 打包入口
  entry: './src/main.js',
  // 打包出口
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // 打包规则
  module: {
    rules: [{
      test: /\.vue$/, // 正则匹配.vue后缀名文件
      loader: 'vue-loader' // 匹配到了.vue文件就用vue-loader进行打包
    }]
  },
  // 插件
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  }
}