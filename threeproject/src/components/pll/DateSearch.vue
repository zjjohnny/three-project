<template>
    <div>
        <div class="user_data_search">
            <div class="block" >
                <span class="demonstration">注册时间：</span>
                <el-date-picker size="mini"
                    v-model="searchInfo.userDate"
                    type="datetimerange"
                    :picker-options="pickerOptions"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    align="right">
                </el-date-picker>
            </div>
            昵称：<el-input size="mini" v-model="searchInfo.userName" placeholder="用户昵称" class="search_input" />
            账号：<el-input size="mini" v-model="searchInfo.userAccount" placeholder="用户账号" class="search_input" />
            手机号码：<el-input size="mini" v-model="searchInfo.userPhone" placeholder="手机号码" class="search_input" />
            <el-button type="primary" size="mini" @click="exportData">导出</el-button>
            <el-button type="primary" size="mini" @click="searchOrder">搜索</el-button>
        </div>
    </div>
</template>

<script>
export default{
    name: 'DateSearch',
    data(){
        return{
            searchInfo: {
                userDate: '',//用户注册时间
                userName: '',//用户昵称
                userAccount: '',//用户账号
                userPhone: '',//手机号码
            },

            pickerOptions: {
                shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                    picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                    picker.$emit('pick', [start, end]);
                    }
                }]
            },
        }
    },
    methods: {
        searchOrder(){
            console.log(this.searchInfo);
        },
        // 导出
        //批量导出
        exportData() {
            
            console.log("导出用户数据");
            
        },
    }
}
</script>

<style scoped>
    /* 用户信息搜索框 */
    .user_data_search{
        width: 80%;
        margin: 10px auto;
        display: flex;
        height: 30px;
        align-items: center;
        font-size: 14px;
        color: gray;
    }
    .el-date-editor--datetimerange.el-input__inner {
        width: 320px;
    }
    .block{
        margin-right: 12px;
    }
    .search_input{
        width: 116px;
        height: 28px;
        margin-right: 10px;
    }
</style>