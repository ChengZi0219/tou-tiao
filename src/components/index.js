import MyBread from '@/components/my-bread.vue'
// 封装成插件的形式 vue.use() 执行插件的配置对象中install函数 并传入vue对象
export default {
  install (Vue) {
    // 在vue下注册所有组件
    Vue.component(MyBread.name, MyBread)
  }
}
