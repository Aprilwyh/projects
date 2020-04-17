<template>
  <div class="goods">
    <div class="menu"></div>
    <div class="foods"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goods: {}
    };
  },
  props: ['seller'],
  created() {
    this.$axios.get('../api/data.json').then((result) => {
      this.goods = result.data.goods;
    });
  }
};
</script>

<style lang="less">
.goods {
  display: flex;
  position: absolute;
  // 定义视口高度
  top: 174px;
  bottom: 46px;
  width: 100%;
  overflow: hidden;
  .menu {
    // 三个属性：等分、内容缩放、占位空间
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;
  }
  .foods {
    flex: 1;
  }
}
</style>
