<template>
  <div class="container">
    <el-row type="flex" class="row-bg">
      <el-col :span="16"></el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>本周热议</span>
            <el-button style="float: right; padding: 3px 0" type="text">>>更多</el-button>
          </div>
          <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
        </el-card>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>这里可作为广告区域</span>
          </div>
          <div>广告区域</div>
        </el-card>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>友情链接</span>
          </div>
          <div>xxx</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="less" scoped>
.container {
  background-color: #f5f5f5;
  padding: 15px 5%;
  .box-card {
    margin-top: 15px;
    &:first-child {
      margin-top: 0px;
    }
  }
}
</style>