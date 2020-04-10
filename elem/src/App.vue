<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">商品</div>
      <div class="tab-item">评论</div>
      <div class="tab-item">商家</div>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
// 引用header组件
import header from './components/header/header.vue';
export default {
  name: 'App',
  components: {
    'v-header': header
  }
};
</script>

<style>
#app .tab {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
}
#app .tab .tab-item {
  flex: 1;
  text-align: center;
}
</style>
