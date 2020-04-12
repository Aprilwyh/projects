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
          <span class="icon"></span>
          <span class="text">{{ seller.supports[0].description }}</span>
        </div>
      </div>
    </div>
    <!-- 公告区 -->
    <div class="bullentin">
      <span></span>
    </div>
  </div>
</template>

<script>
// 导出该组件
export default {
  data() {
    return {};
  },
  props: ['seller']
};
</script>
<style>
.header {
  color: #fff;
  background-color: #000;
}
.main-content {
  padding: 24px 12px 18px 24px;
  font-size: 0px;
}
.main-content .avatar,
.main-content .content {
  display: inline-block;
}
.main-content .avatar {
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
  font-size: 12px;
  margin: 10px 0px 2px 0px;
}
</style>
