### 实战笔记
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
    proxy: {} // 设置代理
  },
  // 第三方插件配置
  pluginOptions: {}
}
```

### vue 中组件间传值常用的几种方式
- 父子组件传值
   - props / $emit
   - $parent / $children
   - $ref
后面两种大同小异
- 非父子间传值
   - 事件总线
```js
// 原理上就是建立一个公共的 js 文件，专门用来传递消息
// bus.js
import Vue from 'vue'
export default new Vue

// 在需要传递消息的地方引入(两个组件都需要引用)
import bus from './bus.js'
// 传递消息
bus.$emit('msg', val) // $emit 传递自定义事件
// 接收消息
bus.$on('msg', val => {
  console.log(val)
})
```
   - $attrs / $listeners
```
// 解决多级组件间传值的问题
1. 将外层组件中不包含 props 的属性传入内层组件，通常配合 interitAttrs 选项一起使用
   <m-parent :msga="a" :msgb="b" :msgc="c"></m-parent>
2. 中间层parent绑定一下 v-bind="$attrs" （不能简写）
3. $attrs 接收 this.$attrs

// $listeners 监听子组件中数据变化，传递给父组件
```
   - vuex

### vue-router
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
#### 路由的跳转
- router-link
- 编程式导航
```js
this.$router.push({ path: '/home' })
// 获取参数 $route ; 对路由进行操作 $router
```

#### 动态路由
根据 url 的参数不同展示不同的页面（请求不一样的数据）  
router.js
```js
path: '/home/:id'
```
编程式导航传递参数
```js
// path -- query , url 显示参数
this.$router.push({ path: '/home', query: { name: 'Tom' } })
// name -- params , url 显示参数
this.$router.push({ name: 'home', params: { id: 3 } })
```

#### 嵌套路由
在这个组件里面显示另一个组件
```js
children: [{
  path: '/child', // url 是 /child， 而不是 /xxx/child
  component: () => import('../views/Child.vue')
}]
```

#### 导航守卫
没有 next() 会卡住

### vuex
#### 获取属性的两种方式
1. 获取 count 属性
```
computed: {
  count() {
    return this.$store.state.count
  }
},
```
2. 获取多个属性 可以使用辅助函数
```
import { mapState } from 'vuex'
computed: mapState({
  count: 'count'
}),
```
与局部计算属性混用
```
computed: {
...mapState()
}
```
#### 模块化
store -> modules  
index.js 不可能存放所有的全局变量，这样会显得非得臃肿，可以让每个模块自己管理自己的全局变量。  


