<template>
  <div>
    <v-header :seller="this.seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
        <!-- <a v-link="{path: '/goods'}">商品</a> -->
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// 引用header组件
import header from './components/header/header.vue';
export default {
  name: 'App',
  data() {
    return {
      seller: {}
    };
  },
  components: {
    'v-header': header
  },
  mounted() {
    this.$axios.get('../api/data.json').then((result) => {
      console.log(result);
      this.seller = result.data.seller;
    });
  }
};
</script>

<style>
.tab {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.tab .tab-item {
  flex: 1;
  text-align: center;
}
.tab .tab-item a {
  /* 设置成块级元素是为了让a不止被内容撑开，点击别处也可跳转路由 */
  display: block;
  font-size: 14px;
  color: rgb(77, 85, 93);
}
.tab .tab-item .router-link-active {
  color: rgb(240, 20, 20);
}
/* .tab {
  position: relative;
}
.tab::after {
  content: '';
  width: 100%;
  position: absolute;
  left: 0px;
  bottom: 0px;
  border-top: 1px solid #000;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
} */

</style>
