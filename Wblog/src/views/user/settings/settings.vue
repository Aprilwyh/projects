<template>
  <div>
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
  </div>
</template>

<script>
  import { uploadPath } from '@/api/storage'
  import { getToken } from '@/utils/auth'
  export default {
    data() {
      return {
        activeName: 'second',
        imageUrl: '',
        uploadPath,
      }
    },
    computed: {
      headers() {
        return {
          myToken: getToken(),
        }
      },
    },
    methods: {
      handleClick(tab, event) {
        // console.log(tab, event);
      },
      handleAvatarSuccess(res, file) {
        this.$message({
          message: res.msg,
          type: 'success',
        })
        if (res.data) {
          this.imageUrl = '/api' + res.data
          this.$store.getters.info.avatar = res.data
        }
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg'
        const isPNG = file.type === 'image/png'
        const isLt2M = file.size / 1024 / 1024 < 2
        if (!isJPG && !isPNG) {
          this.$message.error('上传头像图片格式不正确!')
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!')
        }
        return (isJPG || isPNG) && isLt2M
      },
    },
  }
</script>

<style lang="less" scoped>
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
</style>