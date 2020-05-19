<template>
  <div id="app">
    <el-container>
      <el-header></el-header>
      <el-main></el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import header from "./components/header";
import main from "./components/main";
import footer from "./components/footer";
export default {
  name: "App",
  components: {
    "el-header": header,
    "el-main": main,
    "el-footer": footer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
