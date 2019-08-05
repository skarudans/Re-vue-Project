<template>
  <div class="loginbody">
    <el-card class="logincard">
      <img src="../../assets/images/logo_index.png" alt />
      <el-form :model="loginform" :rules="loginrules" status-icon ref="loginform">
        <el-form-item prop="mobile">
          <el-input v-model="loginform.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="loginform.code" placeholder="请输入验证码" style="width:230px"></el-input>
          <el-button style="margin-left:18px">发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox :value="true">我已阅读并同意用户协议等等</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%" @click="onsub">登陆</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    const checkmobile = (rule, value, callback) => {
      if (!/^1[3-9]\d{9}$/.test(value)) {
        return callback(new Error('手机号错惹'))
      }
      callback()
    }

    return {
      loginform: {
        mobile: '13911111111',
        code: '246810'
      },
      loginrules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkmobile, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '正确书写', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onsub () {
      this.$refs.loginform.validate(valid => {
        if (valid) {
          this.$http.post('http://ttapi.research.itcast.cn/mp/v1_0/authorizations', this.loginform).then(res => {
            this.$router.push('./')
          }).catch(() => {
            this.$message.error('信息输入错误')
          })
        }
      })
    }
  }
}
</script>

<style scoped lang='less'>
.loginbody {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../../assets/images/login_bg.jpg") no-repeat center/cover;
}
.logincard {
  width: 400px;
  height: 350px;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translateX(-50%) translateY(-45%);
  img {
    width: 200px;
    margin: 0 auto;
    display: block;
    margin-bottom: 30px;
  }
}
</style>
