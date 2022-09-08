const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  // 配置跨域
  devServer: {
    port: 8080,
    proxy: {
      "/api": {
        target: "http://42.192.152.16:8080/doc.html",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    }
  }
})
