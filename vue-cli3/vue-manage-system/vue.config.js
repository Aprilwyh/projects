module.exports = {
  devServer: {
    port: 3333,
    open: true
  },
  css: {
    loaderOptions: {
      sass: {
        // data 换成 prependData， 末尾加分号
        prependData: `@import "@/assets/scss/_variable.scss";`
      }
    }
  }
}
