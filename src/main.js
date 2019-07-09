import Vue from 'vue'
import App from './App.vue'

// 导包
import ElementUI from 'element-ui'
// 导入样式
import 'element-ui/lib/theme-chalk/index.css'

import router from '@/router'
// 在全局范围注册组件（注册element-ui组件库）
Vue.use(ElementUI)

// 不提示开发环境
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
