<template>
  <div class="container">
    <div class="header-con">
      <el-row type="flex" class="header main">
        <el-col :span="4">
          <h1 class="title">Wblog</h1>
        </el-col>
        <el-col :span="16">
          <div class="home">
            <router-link to="/home">
              <i class="el-icon-location-outline"></i>
              主页
            </router-link>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="user">
            <i class="fa fa-user-circle-o"></i>
            <router-link>登录</router-link>
            <router-link>注册</router-link>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="bar-con">
      <el-tabs v-model="activeName" @tab-click="handleClick" class="bar main">
        <el-tab-pane label="首页" name="first">
          <v-content :activeName="this.activeName"></v-content>
        </el-tab-pane>
        <el-tab-pane label="提问" name="second">
          <v-content :activeName="this.activeName"></v-content>
        </el-tab-pane>
        <el-tab-pane label="分享" name="third">
          <v-content :activeName="this.activeName"></v-content>
        </el-tab-pane>
        <el-tab-pane label="讨论" name="fourth">
          <v-content :activeName="this.activeName"></v-content>
        </el-tab-pane>
        <el-tab-pane label="建议" name="fifth">
          <v-content :activeName="this.activeName"></v-content>
        </el-tab-pane>
        <el-tab-pane label="|"></el-tab-pane>
        <el-tab-pane label="我发表的贴" name="seventh">我发表的贴</el-tab-pane>
        <el-tab-pane label="我收藏的贴" name="eighth">我收藏的贴</el-tab-pane>
      </el-tabs>
      <i class="fa fa-search"></i>
      <el-button type="info">发表新帖</el-button>
    </div>
  </div>
</template>

<script>
import content from "./content.vue";
export default {
  name: "HelloWorld",
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  components: {
    "v-content": content
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.container {
  .header-con {
    background-color: #aaaaaa;
    .header {
      height: 60px;
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
        line-height: 60px;
        a {
          color: #fff;
          display: inline-block;
        }
      }
      .user {
        line-height: 60px;
        font-size: 28px;
        color: #fff;
        i {
          font-size: 32px;
        }
        a {
          color: #fff;
          display: inline-block;
        }
      }
    }
  }
  .bar-con {
    position: relative;
    .bar {
      height: 50px;
      line-height: 50px;
      background-color: #fff;
      /deep/ .el-tabs__header {
        margin: 0px !important;
        /deep/ .el-tabs__nav-wrap::after {
          height: 0px;
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
}
</style>
