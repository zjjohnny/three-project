import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(VueQuillEditor, /* { default global options } */)
import {
  server
} from "./http/api";
Vue.prototype.$axios = server;
Vue.use(ElementUI, axios);

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
