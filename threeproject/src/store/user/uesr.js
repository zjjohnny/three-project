export default {
    namespaced: true, 
    state: {
       /* 用户token */
      token: localStorage.getItem('token') || '',
      /* 用户基本信息 */
      userInfo: {}
  },
    getters: {
      
  },
    mutations: {
      /* mutations修改用户token */
      updateToken(state,value) { 
        state.token = value;
        this.commit('m_user/saveTokenToStorage')
      },
      /* 保存用户token */
      saveTokenToStorage(state) { 
        localStorage.setItem('token',state.token);
      },
      /* 保存用户基本信息 */
      saveUserInfo(state, value) { 
        state.userInfo = value;
      }
  },
    actions: {
      /* actions修改用户token */
      updateToken(context,value) { 
        context.commit('updateToken',value);
      },
      /* 存储用户基本信息 */
      saveUserInfo(context, value) { 
        context.commit('saveUserInfo',value);
      }
  }
}