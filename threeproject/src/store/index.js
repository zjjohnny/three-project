import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    roleeidttData: {},
    edietlist: {}
  },
  getters: {
  },
  mutations: {
    saveroductist(state, roleeidttData) {
      state.roleeidttData = roleeidttData;
    },
    saveeditlist(state, edietlist) {
      state.edietlist = edietlist
    }
  },
  actions: {

  },
  modules: {
  }
})
