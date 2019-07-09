// 创建路由对象 配置路由规则和其他路由配置

import Vue from 'vue'
import VueRouter from 'vue-router'

import login from '../views/login'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { name: 'login', path: '/login', component: login }
  ]
})

export default router
