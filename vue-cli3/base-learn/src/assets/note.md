```js
// 常用配置
module.exports = {
  // 基本路径， vue-cli3.3 以前使用baseUrl
  publicPath: '/',
  // 输出文件目录
  outputDir: 'dist',
  // 用于嵌套生成的静态资产（js、css、img、fonts）的目录
  assetsDir: '',
  // 生产环境 sourceMap 设置为 false 之后打包体积减少很多
  productionSourceMap: true,
  // webpack 配置，了解一下两者区别
  configureWebpack: () => { },
  chainWebpack: () => { },
  // css相关配置
  css: {
    // 启用 css modules
    modules: false,
    // 是否使用 css 分离插件
    extract: true,
    // 开启 css source maps？
    sourceMap: false,
    // css 预设器配置项
    loaderOptions: {},
  },
  // webpack-dev-server 相关配置
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    proxy: {} // 设置代理
  },
  // 第三方插件配置
  pluginOptions: {}
}
```

### vue 中组件间传值常用的几种方式
父子组件传值
- props / $emit
- $parent / $children
- $ref
后面两种大同小异


路由
```js
const routes = [
  // 正常加载方式。进入页面就加载组件
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // 懒加载方式。优点：进入页面的时候不会加载，优化页面加载速度，按需加载。一般用这种
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
```