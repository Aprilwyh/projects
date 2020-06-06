<template>
  <div class="container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="登录" name="login">
            <login></login>
          </el-tab-pane>
          <el-tab-pane label="注册" name="register">
            <register></register>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-card>
  </div>
</template>
<script>
import login from "./login";
import register from "./register";
export default {
  data() {
    return {
      activeName: this.$route.name
    };
  },
  watch: {
    $route(to, from) {
      if (to.name === "login" || to.name === "register") {
        this.activeName = to.name;
      }
    }
  },
  methods: {
    handleClick(tab) {
      if (tab.name === "login") {
        this.$router.push({
          name: "login"
        });
      } else if (tab.name === "register") {
        this.$router.push({
          name: "register"
        });
      }
    }
  },
  components: {
    login,
    register
  }
};
</script>
<style lang="less" scoped>
.container {
  padding: 15px;
  background-color: #f5f5f5;
  /deep/ .el-card__header {
    border-bottom: none;
    font-size: 18px;
  }
  /deep/ .el-tabs__item {
    margin-left: 30px;
    padding: 0 30px;
  }
  /deep/ .el-tabs__item:last-child {
    margin-left: 0px;
  }
  /deep/ .el-tabs__active-bar {
    padding-left: 30px !important;
    padding-right: 30px !important;
  }
}
</style>