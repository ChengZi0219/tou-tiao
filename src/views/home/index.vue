<template>
  <el-container class="homeCon">
    <el-aside class="myAside" :width="collapse?'64px':'200px'">
      <div class="logo" :class="{close:collapse}"></div>
      <!-- default-active 设置默认项菜单 关联导航栏上的index
          刷新页面 选中菜单样式丢失，:default-active="$route.path"获取当前路由的路径
      -->
      <!-- 导航菜单中添加router属性：是否使用vue-router的模式，启用该模式会在激活导航是以index作为path进行路由跳转 -->
      <el-menu :default-active="$route.path" background-color="#333c4e" style="border-right:none" text-color="#fff" :collapse="collapse"
        :collapse-transition="false" router>
        <!-- el-menu-item 为一级菜单 不包含子菜单 -->
        <el-menu-item index="/">
          <i class="el-icon-s-home"></i>
          <template slot="title">
            <span slot="title">首页</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/article">
            <i class="el-icon-document"></i>
          <template slot="title">
            <span slot="title">内容管理</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/image">
            <i class="el-icon-picture"></i>
          <template slot="title">
            <span slot="title">素材管理</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/publish">
          <i class="el-icon-s-promotion"></i>
          <template slot="title">
            <span slot="title">发布文章</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/comment">
          <i class="el-icon-chat-dot-round"></i>
          <template slot="title">
            <span slot="title">评论管理</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/fans">
            <i class="el-icon-present"></i>
          <template slot="title">
            <span slot="title">粉丝管理</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/setting">
            <i class="el-icon-setting"></i>
          <template slot="title">
            <span slot="title">个人设置</span>
          </template>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="myHeader">
        <span class="el-icon-s-fold" @click="fode()"></span>
        <span style=" vertical-align: middle;padding-left:10px;">江苏传智播客教育有限公司</span>
        <el-dropdown style="float:right;margin-right:30px">
            <img
              style="vertical-align: middle"
              width="30"
              height="30"
              :src="avatar"
              alt
            />
          <span>
            <span style="vertical-align: middle;padding-left:10px;">{{name}}</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <!-- slot插槽 slot为dropdown来设置下拉菜单-->
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-setting" @click.native="setting()">个人设置</el-dropdown-item>
            <el-dropdown-item icon="el-icon-unlock" @click.native="logout()">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data () {
    return {
      collapse: false,
      name: '',
      avatar: ''
    }
  },
  created () {
    const user = JSON.parse(window.sessionStorage.getItem('toutiao'))
    this.name = user.name
    this.avatar = user.photo
  },
  methods: {
    fode () {
      this.collapse = !this.collapse
    },
    // 给el-drop-item组件绑定点击事件，使用@click-active 触发原生事件 (因为组件不一定支持原生事件)
    setting () {
      this.$router.push('/setting')
    },
    logout () {
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="less" scoped>
.homeCon {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  .myAside {
    width: 200px;
    background-color: #313845;
    .logo {
      width: 100%;
      height: 60px;
      background: #313845 url('../../assets/images/logo_admin.png') no-repeat center / 140px auto;
    }
    .close {
      background-image: url('../../assets/images/logo_admin_01.png');
      background-size: 36px auto;
    }
  }
  .myHeader {
    border-bottom: 1px solid #ddd;
    line-height: 60px;
    .el-icon-s-fold {
      font-size: 26px;
      vertical-align: middle;
    }
  }
}
</style>
