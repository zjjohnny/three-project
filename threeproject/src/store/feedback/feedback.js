export default {
    namespaced: true,
    state: {
        /* 用户反馈数据 */
        feedBackList:[],
    },
    getters: {
        /* 获取已勾选的 */
        checkedCount(state) { 
            const checkedList = [];
            for (let i = 0; i < state.feedBackList.length; i++) {
                if (state.feedBackList[i].isChecked) {
                    checkedList.push(state.feedBackList[i].sugId);
                }
            }
            return checkedList;
        }
    },
    mutations: {
        /* 存储用户反馈 */
        saveUserFeedBack(state, value) { 
            for (let i = 0; i < value.length; i++) {
                value[i]['isChecked'] = false;
            }
            state.feedBackList = value;
            console.log(state.feedBackList);
        },
        /* 全选or全不选 */
        checkAll(state, value) { 
            state.feedBackList.forEach(i => i.isChecked = value);
        },
        /* 每条评论前的复选框是否被选中 */
        updateIsChecked(state, value) { 
            const findResult = state.feedBackList.find(i => i.sugId == value)
            if (findResult) findResult.isChecked = !findResult.isChecked;
        }
    },
    actions: {
        /* 存储用户反馈 */
        saveUserFeedBack(context, value) { 
            context.commit('saveUserFeedBack', value);
        },
        /* 全选or全不选 */
        checkAll(context, value) { 
            context.commit('checkAll', value);
        },
        /* 每条评论前的复选框是否被选中 */
        updateIsChecked(context, value) { 
            context.commit('updateIsChecked', value);
        }
    },
}