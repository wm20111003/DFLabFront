<template>
  <Layout>
    <Header style="height: 80px">
      <Row style="z-index: 10; padding: 5px 10px; display: flex; text-align: center">
        <img class="header-logo" src="../assets/images/login.png" />
        <img class="header-logo" src="../assets/images/login.png" />
        <img class="header-logo" src="../assets/images/login.png" />
        <img class="header-logo" src="../assets/images/login.png" />
        <img class="header-logo" src="../assets/images/login.png" />
        <img class="header-logo" src="../assets/images/login.png" />
      </Row>
    </Header>
    <div id="main">
      <div class="login">
        <div class="login-form">
          <div class="login-logo">
            <span>
              <h1>登 录</h1>
            </span>
          </div>
          <el-form inline ref="loginFormRef" :model="formData" :rules="rule">
            <el-form-item prop="username" class="form-item">
              <el-input
                v-model="formData.username"
                type="text"
                suffix-icon="el-icon-user"
                placeholder="请输入账号"
                @on-enter="loginSubmit"
              />
            </el-form-item>
            <el-form-item prop="password" class="form-item">
              <el-input
                v-model="formData.password"
                type="password"
                suffix-icon="el-icon-lock"
                placeholder="请输入密码"
                @on-enter="loginSubmit"
              />
            </el-form-item>
            <el-form-item class="form-item">
              <el-button class="loginBtn" type="primary" :loading="loading" @click="loginSubmit">立刻登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <Footer
      style="position: fixed; bottom: 0; left: 0; width: 100%; line-height: 50px; text-align: center; font-size: 12px "
    >
      <span>Copyright © 2018-2020</span>
    </Footer>
  </Layout>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'
export default Vue.extend({
  layout: 'full',
  props: {
    formData: {
      type: Object,
      default: () => {
        return {
          username: '',
          password: ''
        }
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    rule: {
      type: Object,
      default: () => {
        return {
          username: [
            {
              required: true,
              message: '请填写登录账户',
              trigger: 'blur'
            },
            {
              type: 'string',
              min: 2,
              message: '登录账户最少为2个字符',
              trigger: 'blur'
            }
          ],
          password: [
            {
              required: true,
              message: '请填写账户密码',
              trigger: 'blur'
            },
            {
              type: 'string',
              min: 6,
              max: 30,
              message: '账户密码必须为6~30字符',
              trigger: 'blur'
            }
          ],
          captcha: [
            {
              required: true,
              message: '请填写验证码',
              trigger: 'blur'
            },
            {
              type: 'string',
              min: 4,
              max: 4,
              message: '验证码是4位',
              trigger: 'blur'
            }
          ]
        }
      }
    }
  },
  methods: {
    ...mapActions('auth', ['login']),
    async loginSubmit(): Promise<void> {
      const res = await this.$axios.post('/api/auth/login', {
        username: this.formData.username,
        password: this.formData.password
      })
      if (res.data.status === 200) {
        await this.login(res.data.user)
        this.$router.push({
          name: 'user'
        })
      } else {
        this.$message({
          showClose: true,
          message: res.data.message,
          type: 'error'
        })
      }
    }
  }
})
</script>
<style scoped lang="scss">
#main {
  // position: fixed;
  display: block;
  // left: 0;
  // top: 0;
  height: 100%;
  width: 100%;
}

.login {
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  height: 100%;
  background-position-y: 100%;
  background-position-x: 70%;
  margin-top: 30px;
}
@media only screen and (max-width: 1240) {
  background-position-x: center;
}

.login-form {
  width: 350px;
  padding: 35px;
  -webkit-box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  background: #fff;
  border-radius: 4px;
  opacity: 0.8;
  transition: 2.5s;
  text-align: center;
}
.login-form:hover {
  opacity: 0.95;
}

.login-logo {
  text-align: center;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  margin-bottom: 20px;
}

.login-logo > span {
  vertical-align: text-bottom;
  font-size: 16px;
  text-transform: uppercase;
  display: inline-block;
}

.form-item {
  width: 100%;
}
.login-form-captcha {
  width: 280px;
  & input {
    height: 48px;
  }
}
.item-input > i.ivu-input-icon {
  left: 0;
  right: auto;
}

.loginBtn {
  width: 100%;
}

.ivu-input-group-append {
  padding: 0 2px !important;
}
.header-logo {
  float: left;
  margin: 10px auto;
  width: 40px;
  height: 40px;
}
.header-title {
  font-size: 16px;
  font-weight: 900;
  float: left;
  line-height: 30px;
  position: relative;
}
.ivu-layout-header {
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #fff;
  height: 100px;
}

.ivu-layout-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #757575;
  color: #fff;
  text-align: center;
}
.login-form-captcha input {
  height: 48px !important;
  font-size: 12px !important;
}
</style>
