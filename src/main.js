import Vue from 'vue'
import App from './App.vue'

// 导包
import ElementUI from 'element-ui'
// 导入样式
import 'element-ui/lib/theme-chalk/index.css'

import router from '@/router'

import axios from '@/api/axios'

import components from '@/components'
Vue.use(components)
// import axios from 'axios'
// // 基准路径
// axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
// // 请求头 头部信息
// axios.defaults.headers = {
//   // token认证需要的字段值 注意要加上前缀'Bearer'
//   Authorization: 'Bearer' + JSON.parse(window.sessionStorage.getItem('toutiao')).token
// }
// 每个组件都是一个vue实例对象，方便每个组件使用，无需多次引入
Vue.prototype.$http = axios

// 在全局范围注册组件（注册element-ui组件库）
Vue.use(ElementUI)

// 不提示开发环境
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
