<template>
  <div class="container">
    <el-row type="flex" class="header">
      <el-col :span="4">
        <h1 class="title">Wblog</h1>
      </el-col>
      <el-col :span="16">
        <div class="home">
          <i class="el-icon-location-outline"></i>
          主页
        </div>
      </el-col>
      <el-col :span="4">
        <div class="user">
          登录
          注册
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.container {
  background-color: #aaaaaa;
  .header {
    width: 90%;
    height: 60px;
    margin: 0 auto;
    .title {
      color: #000;
      font-size: 35px;
      margin-left: 30px;
      line-height: 60px;
      position: relative;
      &::after {
        content: "";
        width: 45px;
        height: 45px;
        background-color: rgba(255, 255, 255, 0.6);
        border-radius: 50%;
        position: absolute;
        left: -5px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .home {
      font-size: 16px;
      color: #fff;
      line-height: 60px;
    }
  }
}
</style>
