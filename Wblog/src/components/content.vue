<template>
  <div class="container">
    <el-row type="flex" class="row-bg">
      <el-col :span="16">
        <div v-if="activeName === 'first'">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>置顶</span>
            </div>
            <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
          </el-card>
        </div>
        <div>
          <el-card class="box-card">
            <el-tabs v-model="active" @tab-click="handleClick">
              <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
              <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
              <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
              <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
            </el-tabs>
          </el-card>
        </div>
      </el-col>
      <el-col :span="8"></el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName,
      active: "second"
    };
  },
  props: ["activeName"]
};
</script>
<style lang="less" scoped>
.container {
  padding: 15px 25px 15px 0;
  line-height: 20px;
  .box-card {
    margin-bottom: 15px;
  }
}
</style>