<template>
  <div class="login-container">
    <el-card class='login-box'>
      <img src="../../assets/images/logo_index.png" alt="">
      <!-- 绑定表单数据和表单规则 -->
      <!-- status-icon 为输入框添加表示校验结果的反馈图标 -->
      <el-form :model="ruleForm" :rules="rules" status-icon ref="ruleForm">
        <el-form-item prop="mobile">
          <el-input v-model="ruleForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="ruleForm.code" placeholder="请输入验证号" style="width:300px"></el-input>
          <el-button type="primary" style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="isCheck" style="margin-right: 5px"></el-checkbox>
          我已阅读并同意<el-link type="primary"  :underline="false">用户协议</el-link>和<el-link type="primary"  :underline="false">隐私条款</el-link>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 100%" @click="submitForm()">登陆</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    const checkMobile = (rule, value, callback) => {
      if (/^1[3-9]\d{9}/.test(this.ruleForm.mobile)) {
        callback()
      } else {
        callback(new Error('手机号码格式不正确！'))
      }
    }
    return {
      // ruleForm表单数据对象
      ruleForm: {
        mobile: '13911111111',
        code: '246810'
      },
      // rules 约定的验证规则
      rules: {
        mobile: [
          { required: true, message: '手机号是必填项哦！', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '验证码是必填项哦！', trigger: 'blur' },
          { len: 6, message: '验证码格式不正确', trigger: 'blur' }
        ]
      },
      isCheck: true
    }
  },
  methods: {
    submitForm () {
      // // validate 对整个表单进行验证
      // this.$refs.ruleForm.validate((vaild) => {
      //   if (vaild) {
      //     this.$http
      //       .post('authorizations', this.ruleForm)
      //       .then((res) => {
      //         // const data = res.data
      //         // console.log(data)
      //         // 验证成功
      //         // 在本地存储信息 保存用户信息 包括token 使用session Storage存储 关闭浏览器后失效
      //         window.sessionStorage.setItem('toutiao', JSON.stringify(res.data.data))
      //         this.$router.push('/')
      //       })
      //       .catch(() => {
      //         // 验证失败 使用组件message 提示信息
      //         this.$message.error('用户名或密码不正确')
      //       })
      //   }
      // })

      // 结合async和await使用 实现表单验证
      // await关键字必须在async修饰的函数中使用
      this.$refs.ruleForm.validate(async vaild => {
        if (vaild) {
          try {
            const res = await this.$http.post('authorizations', this.ruleForm)
            // 验证成功保存信息，跳转到首页
            window.sessionStorage.setItem('toutiao', JSON.stringify(res.data.data))
            this.$router.push('/')
          } catch (err) {
            this.$message.error('用户名或密码不正确')
          }
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: url('../../assets/images/login_bg.jpg');
  .login-box {
    width: 500px;
    height: 380px;
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
    img {
      display: block;
      width: 200px;
      margin: 10px auto 30px;
    }
  }
}
</style>
