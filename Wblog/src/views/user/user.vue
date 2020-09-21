<template>
  <div class="set-con main">
    <el-row>
      <el-col :span="6">
        <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#aaa" text-color="#fff" active-text-color="#000" router>
          <el-menu-item index="/user/home">
            <i class="el-icon-location"></i>
            <span>我的主页</span>
          </el-menu-item>
          <el-menu-item index="/user/index">
            <i class="el-icon-menu"></i>
            <span slot="title">用户中心</span>
          </el-menu-item>
          <el-menu-item index="/user/settings">
            <i class="el-icon-document"></i>
            <span slot="title">基本设置</span>
          </el-menu-item>
          <el-menu-item index="/user/mess">
            <i class="el-icon-setting"></i>
            <span slot="title">我的消息</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="18">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
</script>

<style lang="less">
  .set-con {
    padding: 20px 0;
    .el-row {
      height: 500px;
      .el-menu {
        height: 500px;
      }
    }
  }
</style>
