<template>
  <div class="container">
    <div class="header-con">
      <el-row type="flex" class="header main">
        <el-col :span="4">
          <h1 class="title">Wblog</h1>
        </el-col>
        <el-col :span="15">
          <div class="home">
            <router-link :to="{path: '/home'}">
              <i class="el-icon-location-outline"></i>
              主页
            </router-link>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="avatar" v-if="$store.getters.token">
            <span>欢迎你，{{ $store.getters.username }}</span>
            <el-dropdown @command="select">
              <img :src="$store.getters.avatar" width="40px" height="40px" />
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="settings">
                  <i class="el-icon-setting"></i>
                  基本设置
                </el-dropdown-item>
                <el-dropdown-item command>我的帖子</el-dropdown-item>
                <el-dropdown-item command>我的评论</el-dropdown-item>
                <el-dropdown-item command>@我的</el-dropdown-item>
                <el-dropdown-item divided command="logout">注销</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="user" v-else>
            <i class="fa fa-user-circle-o"></i>
            <router-link :to="{path:'/login'}">登录</router-link>
            <router-link :to="{path:'/register'}">注册</router-link>
            <i class="fa fa-qq"></i>
            <i class="fa fa-weibo"></i>
          </div>
        </el-col>
      </el-row>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "myHeader",
  data() {
    return {
      avatarDef: require("../assets/avatar-def.jpg") // 获取默认头像
    };
  },
  methods: {
    select(command) {
      switch (command) {
        case "logout":
          this.logout();
          break;
        case "settings":
          this.settings();
          break;
      }
    },
    // 注销
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$message({
          message: "您已注销",
          type: "success"
        });
      });
    },
    // 基本设置
    settings() {
      this.$router.push({ path: "/user/settings" });
    }
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
        a:hover {
          text-shadow: 0 0 5px #000;
        }
      }
      .avatar {
        span {
          position: absolute;
          right: 70px;
          bottom: 10px;
        }
        .el-dropdown {
          position: absolute;
          right: 0;
          top: 10px;
          img {
            border-radius: 50%;
            cursor: pointer;
          }
        }
      }
      .user {
        line-height: 60px;
        font-size: 16px;
        i,
        a {
          margin: 0 6px;
          color: #fff;
          display: inline-block;
        }
        i:hover,
        a:hover {
          color: rgba(0, 0, 0, 0.3);
        }
        i {
          font-size: 22px;
          vertical-align: middle;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
