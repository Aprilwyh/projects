<template>
  <div class="container">
    <div class="bar-con">
      <el-tabs v-model="activeName" @tab-click="barClick" class="bar">
        <el-tab-pane label="首页" name="first"></el-tab-pane>
        <el-tab-pane label="提问" name="second"></el-tab-pane>
        <el-tab-pane label="分享" name="third"></el-tab-pane>
        <el-tab-pane label="讨论" name="fourth"></el-tab-pane>
        <el-tab-pane label="建议" name="fifth"></el-tab-pane>
        <el-tab-pane label="|"></el-tab-pane>
        <el-tab-pane label="我发表的贴" name="seventh">我发表的贴</el-tab-pane>
        <el-tab-pane label="我收藏的贴" name="eighth">我收藏的贴</el-tab-pane>
      </el-tabs>
      <i class="fa fa-search"></i>
      <el-button type="info">发表新帖</el-button>
    </div>
    <div class="content-con">
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
      active: "second"
    };
  },
  methods: {
    barClick(tab, event) {
      console.log(tab, event);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  background-color: #f5f5f5;
  .bar-con {
    position: relative;
    .bar {
      height: 50px;
      line-height: 50px;
      background-color: #fff;
      /deep/ .el-tabs__header {
        margin: 0px !important;
        .el-tabs__nav-wrap::after {
          height: 0px;
        }
        .el-tabs__nav {
          margin-left: 5%;
        }
        /deep/ .el-tabs__active-bar {
          height: 0px;
        }
        /deep/ .el-tabs__item:hover,
        /deep/ .el-tabs__item.is-active {
          font-weight: 700;
          color: #303133;
        }
      }
    }
    i,
    .el-button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    i {
      right: 15%;
      color: #555;
      cursor: pointer;
      font-size: 22px;
    }
    .el-button {
      right: 5%;
    }
  }
  .content-con {
    padding: 0px 5%;
    .el-col-16 {
      padding-right: 15px;
    }
    .box-card {
      margin-top: 15px;
    }
  }
}
</style>