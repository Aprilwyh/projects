<template>
  <div class="container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="登录" name="first">denglu</el-tab-pane>
          <el-tab-pane label="注册" name="second">
            <v-register></v-register>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      activeName: "second"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  components: {
    "v-register": () => import("./register")
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
}
</style>