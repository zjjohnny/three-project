import Vue from 'vue'
import Vuex from 'vuex'
/* 引入用户state */
import user from './user/uesr'
/* 引入用户反馈 */
import feedback from './feedback/feedback'

Vue.use(Vuex)

export default new Vuex.Store({
  /* state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  } */
  modules: {
    'm_user': user,
    'm_feedback': feedback,
  }
})
