const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {//代理，处理跨域
      '/api': { //当需要发请求 "http://192.168.50.151:8888/"
        target: 'http://42.192.152.16:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
