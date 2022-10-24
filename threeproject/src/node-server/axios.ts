const axios = require('axios')

const services = axios.create({
  baseURL: 'http://localhost:3000'
})

export default services
