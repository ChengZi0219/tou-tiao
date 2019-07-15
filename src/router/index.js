// 创建路由对象 配置路由规则和其他路由配置

import Vue from 'vue'
import VueRouter from 'vue-router'

import login from '@/views/login'
import Home from '@/views/home'
import Welcome from '@/views/welcome'
import NotFound from '@/views/404'
import Article from '@/views/article'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { name: 'login', path: '/login', component: login },
    {
      path: '/',
      component: Home,
      children: [
        { path: '/', name: 'welcome', component: Welcome },
        { path: '/article', name: 'article', component: Article }
      ]
    },
    // 路径走到这个位置说明没有任何程序去处理这个路径
    { name: '404', path: '*', component: NotFound }
  ]
})

// 注册一个全局的前置守卫(未登录路由拦截)
router.beforeEach((to, from, next) => {
  // 如果不主动触发，next 会一直等待
  // 如果是登陆页面就放行
  // if (to.path === '/login') return next()
  // // 判断登陆状态
  // const user = window.sessionStorage.getItem('toutiao')
  // if (user) {
  //   next()
  // } else {
  //   next('/login')
  // }
  const user = window.sessionStorage.getItem('toutiao')
  if (to.path !== '/login' && !user) return next('/login')
  next()
})
export default router
