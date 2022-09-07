export default {
    namespaced: true,
    state: {
        /* 用户反馈数据 */
        feedBackList:[],
    },
    getters: {},
    mutations: {
        /* 存储用户反馈 */
        saveUserFeedBack(state,value) { 
            state.feedBackList = value;
        }
    },
    actions: {
        /* 存储用户反馈 */
        saveUserFeedBack(context, value) { 
            context.commit('saveUserFeedBack', value);
        }
    },
}