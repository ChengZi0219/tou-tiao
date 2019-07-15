// 路由默认配置
import axios from 'axios'
// 创建axios对象 配置项
const instance = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/mp/v1_0/'
  // headers: {
  //   // token认证需要的字段值 注意要加上前缀'Bearer'
  //   Authorization: 'Bearer' + JSON.parse(window.sessionStorage.getItem('toutiao')).token
  // }
})
// 请求拦截器(每次请求都执行)
instance.interceptors.request.use(config => {
  // 请求成功
  // 获取session存储信息
  const user = window.sessionStorage.getItem('toutiao')
  console.log(user)
  // 判断是否有用户信息
  if (user) {
    // 如果有用户信息，将信息添加到请求配置对象中
    config.headers = {
      // token认证需要的字段值 注意要加上前缀'Bearer '
      Authorization: 'Bearer ' + JSON.parse(user).token
    }
  }
  return config
}, error => {
  // 请求失败
  return Promise.reject(error)
})

// 响应拦截器
instance.interceptors.response.use(response => {
  return response
}, (error) => {
  console.log(error.response.status)
  // 当返回401状态码 说明token过期或未传 跳转到登陆页面
  if (error.response.status === 401) {
    location.hash = '#/login'
  }
  return Promise.reject(error)
})
export default instance
