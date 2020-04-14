<template>
  <div class="header">
    <!-- 主内容区 -->
    <div class="main-content">
      <!-- 头像 -->
      <div class="avatar">
        <img :src="seller.avatar" alt="用户头像" width="64" height="64">
      </div>
      <!-- 内容区 -->
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ seller.name }}</span>
        </div>
        <div class="description">
          {{ seller.description }}/{{ seller.deliveryTime }}分钟送达
        </div>
        <div class="support" v-if="seller.supports">
          <!-- 根据不同的类型显示图片，减/折等等 -->
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{ seller.supports[0].description }}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count">
        <span class="count">{{ seller.supports.length }}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <!-- 公告区 -->
    <div class="bulletin">
      <span class="title"></span><span class="text">{{ seller.bulletin }}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <!-- 背景图片 -->
    <div class="background">
      <img :src="seller.avatar" alt="背景图片" width="100%" height="200%">
    </div>
  </div>
</template>

<script>
// 导出该组件
export default {
  data() {
    return {};
  },
  props: ['seller'],
  created() {
    // 动态展示不同的class
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  }
};
</script>
<style>
.header {
  color: #fff;
  background-color: rgba(7, 17, 27, 0.5);
  position: relative;
}
.main-content {
  padding: 24px 12px 18px 24px;
  font-size: 0px;
  position: relative;
}
.main-content .avatar,
.main-content .content {
  display: inline-block;
}
.main-content .avatar img {
  border-radius: 4px;
}
.main-content .content {
  margin-left: 16px;
  vertical-align: bottom;
}
.main-content .content .title {
  margin: 2px 0px 8px 0px;
}
.main-content .content .title .brand {
  display: inline-block;
  width: 30px;
  height: 18px;
  background-image: url('./brand@2x.png');
  background-size: 30px 18px;
  background-repeat: no-repeat;
}
.main-content .content .title .name {
  font-size: 16px;
  font-weight: bold;
  line-height: 18px;
  margin-left: 6px;
  vertical-align: bottom;
}
.main-content .content .description {
  font-size: 12px;
  line-height: 12px;
}
.main-content .content .support {
  font-size: 10px;
  margin: 10px 0px 2px 0px;
}
.main-content .content .support .icon {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 4px;
  background-size: 12px 12px;
  background-repeat: no-repeat;
  vertical-align: bottom;
}
.main-content .content .support .decrease {
  background-image: url('./decrease_1@2x.png');
}
.main-content .content .support .discount {
  background-image: url('./discount_1@2x.png');
}
.main-content .content .support .guarantee {
  background-image: url('./guarantee_1@2x.png');
}
.main-content .content .support .invoice {
  background-image: url('./invoice_1@2x.png');
}
.main-content .content .support .special {
  background-image: url('./special_1@2x.png');
}
.main-content .support-count {
  background-color: rgba(0, 0, 0, .2);
  height: 24px;
  line-height: 24px;
  position: absolute;
  right: 12px;
  bottom: 14px;
  padding: 0 8px;
  border-radius: 14px;
  text-align: center;
}
.main-content .support-count .count,
.main-content .support-count .icon-keyboard_arrow_right {
  vertical-align: middle;
  line-height: 24px;
  font-size: 10px;
}
.main-content .support-count .icon-keyboard_arrow_right {
  margin-left: 2px;
}
.header .bulletin {
  height: 28px;
  line-height: 28px;
  background-color: rgba(7, 17, 27, .2);
  padding: 0 22px 0 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
}
.header .bulletin .title {
  display: inline-block;
  width: 22px;
  height: 12px;
  background-image: url('./bulletin@2x.png');
  background-size: 22px 12px;
  background-repeat: no-repeat;
}
.header .bulletin .text {
  font-size: 10px;
  margin: 0 4px;
  vertical-align: middle;
}
.header .bulletin .icon-keyboard_arrow_right {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 10px;
}
.header .background {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  filter: blur(10px);
  overflow: hidden;
}
</style>
