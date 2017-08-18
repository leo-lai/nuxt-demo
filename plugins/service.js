import Vue from 'vue'
import axios from 'axios'

const baseURL = Object.is(process.env.NODE_ENV, 'production') ? 'https://api.ushiyihao.com/useeproject02/interface/' : 'http://api.usee1.com.cn/useeproject/interface/'

const service = axios.create({
  baseURL
})

// 拦截器
service.interceptors.request.use(config => {
	config.transformRequest = [function (data) {
    let ret = []
    for (let key in data) {
    	ret.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    }
    return ret.join('&')
  }]
  return config
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

Vue.prototype.$http = service
export default service
