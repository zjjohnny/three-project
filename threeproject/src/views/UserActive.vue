<template>
    <div class="user_active">
        <div class="refund-mgt-title">
            <div>活跃用户</div>
        </div>
        <div class="user_active_container">
            <div class="user_data_search">
                <div class="block" >
                    <el-date-picker size="mini"
                        v-model="searchTime"
                        type="datetimerange"
                        :picker-options="pickerOptions"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        align="right">
                    </el-date-picker>
                </div>
                <el-button type="primary" size="mini" @click="searchOrder">搜索</el-button>
            </div>
            <div class="user_data_info">
                <table class="refund-table">
                    <tr class="table-head">
                        <td>时间</td>
                        <td>活跃用户</td>
                        <td>1天后</td>
                        <td>3天后</td>
                        <td>5天后</td>
                        <td>10天后</td>
                        <td>15天后</td>
                        <td>30天后</td>
                    </tr>
                    <tr class="table-contanier">
                        <td>2021-10-20</td>
                        <td>1000</td>
                        <td class="bule_color">61.3%</td>
                        <td class="bule_color">66.5%</td>
                        <td class="bule_color">50.2%</td>
                        <td class="bule_color">58.0%</td>
                        <td class="bule_color">50.2%</td>
                        <td class="bule_color">58.0%</td>
                    </tr>
                    
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'UserActive',
    data(){
        return{
            searchTime: '',
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
    methods:{
        searchOrder(){
            console.log(this.searchTime);
        },
    }
}
</script>

<style scoped>
    .user_active_container{
        width: 80%;
        margin: 0 auto;
    }
    .user_data_search{
        display: flex;
        margin: 10px 0;
    }
    .el-date-editor--datetimerange.el-input__inner {
        width: 320px;
    }
    .block{
        margin-right: 12px;
    }

    /* 数据表格信息 */
    table{
        width: 100%;
        border-collapse: collapse;  /*表格合并 */
        font-size: 14px;
    }
    td{
        text-align: center;
        padding: 5px 0;
    }
    .table-head{
        height: 50px;
    }
    .table-head td{
        border: 1px solid lightgray;
    }
    .table-contanier{
        height: 60px;
    }
    .bule_color{
        background-color: rgb(170,214,250);
        color: gray;
    }
</style>