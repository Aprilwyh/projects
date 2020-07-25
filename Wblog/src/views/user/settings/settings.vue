<template>
  <div class="set-con main">
    <el-row>
      <el-col :span="6">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#aaa"
          text-color="#fff"
          active-text-color="#000"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="18">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="我的资料" name="first">我的资料</el-tab-pane>
          <el-tab-pane label="头像" name="avatar">
            <el-upload
              class="avatar-uploader"
              :headers="headers"
              :action="uploadPath"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-tab-pane>
          <el-tab-pane label="密码" name="third">密码</el-tab-pane>
          <el-tab-pane label="账号绑定" name="fourth">账号绑定</el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { uploadPath } from "@/api/storage";
import { getToken } from "@/utils/auth";
export default {
  data() {
    return {
      activeName: "second",
      imageUrl: "",
      uploadPath
    };
  },
  computed: {
    headers() {
      return {
        myToken: getToken()
      };
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    handleAvatarSuccess(res, file) {
      this.$message({
        message: res.msg,
        type: "success"
      });
      if (res.data) {
        this.imageUrl = "/api" + res.data;
        this.$store.getters.info.avatar = res.data;
      }
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isPNG = file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG && !isPNG) {
        this.$message.error("上传头像图片格式不正确!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return (isJPG || isPNG) && isLt2M;
    }
  }
};
</script>

<style lang="less">
.set-con {
  padding: 20px 0;
  .el-row {
    height: 500px;
    .el-menu {
      height: 500px;
    }
    .el-tabs {
      padding-left: 15px;
    }
    .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      &:hover {
        border-color: #409eff;
      }
      .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
      }
      .avatar {
        width: 178px;
        height: 178px;
        display: block;
      }
    }
  }
}
</style>
