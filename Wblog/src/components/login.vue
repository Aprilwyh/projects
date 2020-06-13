<template>
  <el-form
    :model="ruleForm"
    status-icon
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
    size="small"
  >
    <el-form-item label="邮箱" prop="email">
      <!--@keyup.enter点击键盘的enter触发事件-->
      <!-- .native: 注册事件，给组件的根元素注册事件 -->
      <el-input v-model="ruleForm.email" @keyup.enter.native="submitForm"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        type="password"
        v-model="ruleForm.password"
        auto-complete="off"
        @keyup.enter.native="submitForm"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">立即登录</el-button>
      <span>忘记密码?</span>
    </el-form-item>
    <el-form-item>
      或者使用社交账号登入
      <i class="fa fa-qq"></i>
      <i class="fa fa-weibo"></i>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        email: "admin@qq.com",
        password: "123"
      },
      rules: {
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: "blur,change"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, message: "密码长度至少需要6位", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios("/login").then(res => {
            let lg = res.data[0];
            if (
              lg.email === this.ruleForm.email &&
              lg.password == this.ruleForm.password
            ) {
              localStorage.setItem("myToken", lg.email);
              this.$message.success("登录成功");
              this.$router.push("homeMain");
            } else {
              this.$message.error("账号或者密码错误");
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    login() {
      this.$axios
        .post("/login", this.ruleForm)
        .then(function(response) {
          if (response && response.data) {
            // 成功
            if (response.data.status === 1) {
            } else {
              // 失败
              alert(response.data.msg);
            }
          }
        })
        .catch(function(error) {});
    }
  },
  components: {}
};
</script>