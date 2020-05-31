<template>
    <el-form class="register-container" label-position="left"
             label-width="0px">
      <h3 class="register_title">注册</h3>
      <el-form-item>
        <el-input type="text" v-model="RegisterForm.username"
                  auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="RegisterForm.password"
                  auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="register">注册</el-button>
      </el-form-item>
    </el-form>
</template>

<script>
    export default {
      name: "Register",
      data() {
        return {
          registerForm:{
            username:'',
            password:''
          },
          responseResult: [],
        }
      },
      methods: {
        register() {
          this.$axios
            .post('/register', {//发送数据
              username: this.RegisterForm.username,
              password: this.RegisterForm.password
            })
            .then(successResponse => {
              if (successResponse.data.code === 200) {
                this.$router.replace({path: '/login'})
              }
            })
            .catch(failResponse => {
            })
        },

      }
    }

</script>

<style scoped>
  .register-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .register_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
</style>
