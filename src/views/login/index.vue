<template>
  <div class="login-container">
    <el-card class='login-box'>
      <img src="../../assets/images/logo_index.png" alt="">
      <el-form>
        <el-form-item>
          <el-input placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item >
          <el-input placeholder="请输入验证号" style="width:300px"></el-input>
          <el-button type="primary" style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="isCheck" style="margin-right: 5px"></el-checkbox>
          我已阅读并同意<el-link type="primary"  :underline="false">用户协议</el-link>和<el-link type="primary"  :underline="false">隐私条款</el-link>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 100%">登陆</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCheck: true
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
