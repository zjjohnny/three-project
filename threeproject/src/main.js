import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import md5 from 'js-md5';
import axios from 'axios'//引入axios模块

Vue.prototype.$axios = axios
Vue.prototype.$md5 = md5;
Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
