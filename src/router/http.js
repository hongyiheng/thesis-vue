import axios from 'axios'
import { Message } from 'element-ui'

axios.defaults.timeout = 5000 // 超时终止请求
axios.defaults.baseURL = 'http://localhost:10086/' // 配置请求地址
// eslint-disable-next-line no-unused-vars
const service = axios.create({
  baseURL: axios.defaults.baseURL, // http://192.168.0.106:8080/devApi/  == http://www.web-jshtml.cn/productapi/productapi
  timeout: 15000 // 超时
  // 网络请求接口，假设 5000
  // 1000 2000，
})

// http request 拦截器
axios.interceptors.request.use(
  config => {
    // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
    config.data = JSON.stringify(config.data)
    config.headers = {
      /* 'Content-Type':'application/x-www-form-urlencoded' */
      'Content-Type': 'application/json;charset=UTF-8'
    }
    // if(token){
    //   config.params = {'token':token}
    // }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// http response 拦截器

axios.interceptors.response.use(
  response => {
    if (response.data.errCode === 2) {
      this.$router.push({
        path: '/login',
        querry: { redirect: this.$router.currentRoute.fullPath }// 从哪个页面跳转
      })
    }
    return response
  },
  error => {
    Message({
      Message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}
