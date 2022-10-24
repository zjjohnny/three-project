const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
  // devServer: {//前端解决跨域问题
  //   proxy: {//代理
  //     '/api': {//当发送http://localhost:8888/请求的时候统一用api代理
  //       target: 'http://localhost:8888/',
  //       changeOrigin: true,
  //       pathRewrite: { '^/api': '' },
  //     }
  //   }
  // }
})
