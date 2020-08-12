const baseConfig = require('./webpack.base.js')
const { merge } = require('webpack-merge')

const prodConfig = {
  mode: 'production', // 生产环境
}

module.exports = merge(baseConfig, prodConfig)