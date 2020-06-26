<template>
  <div class="reg-con">
    <el-form
      :model="ruleForm2"
      status-icon
      :rules="rules2"
      ref="ruleForm2"
      label-width="100px"
      class="demo-ruleForm"
      size="small"
    >
      <el-form-item prop="email" label="邮箱">
        <el-input v-model="ruleForm2.email"></el-input>
        <span>将会成为您唯一的登入名</span>
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="ruleForm2.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
        <span>6到16个字符</span>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm2.repass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="验证码">
        <el-input v-model="ruleForm2.vercode" placeholder="请回答后面的问题"></el-input>
        <span @click="changeCode">
          <img :src="codeUrl" alt="验证码" width="120px" height="32px" />
        </span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')" :loading="loading">立即注册</el-button>
      </el-form-item>
      <el-form-item>
        或者直接使用社交账号快捷注册
        <i class="fa fa-qq"></i>
        <i class="fa fa-weibo"></i>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.repass !== "") {
          this.$refs.ruleForm2.validateField("repass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        email: "",
        username: "",
        password: "",
        repass: "",
        vercode: ""
      },
      rules2: {
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: "blur,change"
          }
        ],
        password: [{ validator: validatePass, trigger: "blur" }],
        repass: [{ validator: validatePass2, trigger: "blur" }]
      },
      codeUrl: "/api/capthca.jpg?time=" + new Date(), // 验证码
      loading: false
    };
  },
  methods: {
    changeCode() {
      this.codeUrl = "/api/capthca.jpg?time=" + new Date(); // 点击更换验证码
    },
    submitForm(ruleForm2) {
      this.$refs[ruleForm2].validate(valid => {
        if (valid && !this.loading) {
          this.loading = true;
          let formData = new FormData();
          for (let key in this.ruleForm2) {
            formData.append(key, this.ruleForm2[key]);
          }
          this.$axios.post("./register", formData).then(res => {
            this.loading = false;
            if (res.data.status !== -1) {
              this.$message({
                message: "注册成功",
                type: "success"
              });
              this.$router.push("login");
            } else {
              this.loading = false;
              this.$message.error(res.data.msg);
            }
          });
        }
      });
    }
  }
};
</script>
<style lang="less">
.reg-con {
  .el-input {
    width: 300px;
  }
  span {
    margin-left: 10px;
    display: inline-block;
  }
}
</style>