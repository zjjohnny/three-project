import axios from "axios";
//创建axios实例
const service = axios.create({
    baseURL: 'http://localhost:8888',
    timeout: 6000, //超时时间,6s
    headers: {
        'Content-Type':'application/json;charset=utf-8'
    }
})

export default service