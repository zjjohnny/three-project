<template>
    <div>
        <div class="user_data_search">
            <div class="block" >
                <span class="demonstration">注册时间: </span>
                <el-date-picker size="mini"
                    v-model="userDate"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                    </el-date-picker>
            </div>
            昵称:&nbsp;<el-input size="mini" v-model="searchInfo.userName" placeholder="用户昵称" class="search_input" />
            账号:&nbsp;<el-input size="mini" v-model="searchInfo.userAccount" placeholder="用户账号" class="search_input" />
            手机号码:&nbsp;<el-input size="mini" v-model="searchInfo.userPhone" placeholder="手机号码" class="search_input" />
            <el-button type="primary" size="mini" @click="exportData">导出</el-button>
            <el-button type="primary" size="mini" @click="searchOrder">搜索</el-button>
        </div>
    </div>
</template>

<script>
export default{
    name: 'DateSearch',
    props:{
        dowUserData:{
            type: Function,
            default: () => {
                return Function
            }
        }
    },
    data(){
        return{
            userDate: '',
            searchInfo: {
                begin_time: '',
                end_time: '',//用户注册时间
                userName: '',//用户昵称
                userAccount: '',//用户账号
                userPhone: '',//手机号码
            },
        }
    },
    methods: {
        // 时间格式转换
        filterTime(time) {
            let date = new Date(time);
            let y = date.getFullYear();
            let m = date.getMonth() + 1;
            m = m < 10 ? "0" + m : m;
            let d = date.getDate();
            d = d < 10 ? "0" + d : d;
            let h = date.getHours();
            h = h < 10 ? "0" + h : h;
            let minute = date.getMinutes();
            minute = minute < 10 ? "0" + minute : minute;
            let s = date.getSeconds();
            s = s < 10 ? "0" + s : s;
            return y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + s;
        },
        // 搜索用户数据
        searchOrder(){
            console.log(this.searchInfo,this.userDate != null);
            if(this.searchInfo.userName == '' && this.searchInfo.userAccount == '' && this.searchInfo.userPhone == '' && this.userDate == null){
                alert("请输入搜索信息")
            }else{
                if(this.userDate == null || this.userDate == ''){
                    this.searchInfo.begin_time = null;
                    this.searchInfo.end_time = null
                }else if(this.userDate != ''){
                    console.log(this.userDate);
                    this.searchInfo.begin_time = this.filterTime(this.userDate[0]);
                    this.searchInfo.end_time = this.filterTime(this.userDate[1])
                }
                this.$emit('searchChange',this.searchInfo)
            }
        },
        //批量导出
        exportData() {
            console.log("导出用户数据");
            this.dowUserData()
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
    .el-date-editor--daterange.el-input__inner{
        width: 230px;
    }
    .block{
        margin-right: 12px;
    }
    .search_input{
        width: 150px;
        height: 28px;
        margin-right: 10px;
    }
    .el-button+.el-button{
        margin-left: 2px;
    }
</style>