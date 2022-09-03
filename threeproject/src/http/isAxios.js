import axios from 'axios';
import qs from 'qs';
const tr = 0;
const apidomain = tr ? '/api' : 'http://42.192.152.16:8080'
axios.defaults.timeout = 15000;
axios.defaults.baseURL = apidomain;
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded' //声明请求格式
axios.defaults.transformRequest = data => qs.stringify(data)  //qs是第三方库，转换为x-www-form-urlencoded
axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params,
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
 * @param {string}url // 请求地址
 * @param {object}data // 请求参数
 * @returns Promise
 */
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}