import axios from 'axios';

const tr = 0;
const apidomain = tr ? '/api' : 'http://42.192.152.16:8080/doc.html'
axios.defaults.timeout = 15000;
axios.defaults.baseURL = apidomain;
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