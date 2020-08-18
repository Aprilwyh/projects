// 导入node的path模块
const path = require('path')

// 引入vue-loader的插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// 引入 html-webpack-plugin 插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 导出内容是对象，CleanWebpackPlugin是其中一个对象，需要解构
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  // 打包入口
  entry: './src/main.js',
  // 打包出口
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist') // 相对路径
  },
  // 打包规则
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/, // 不匹配 node_modules 文件夹
      loader: 'babel-loader'
    }, {
      test: /\.vue$/, // 正则匹配.vue后缀名文件
      loader: 'vue-loader' // 匹配到了.vue文件就用vue-loader进行打包
    }, {
      test: /\.(jpg|jpeg|png|svg)$/,
      loader: 'url-loader',
      options: {
        name: '[name].[ext]', // 命名规则：原文件名.原文件后缀。详细见官网
        limit: 2048
      }
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.styl(us)?$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'stylus-loader']
    }]
  },
  // 插件
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin()
  ],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js',
      '@': path.resolve(__dirname, '../src'),
      'styles': path.resolve(__dirname, '../src/assets/styles'),
      'images': path.resolve(__dirname, '../src/assets/images')
    }
  }
}