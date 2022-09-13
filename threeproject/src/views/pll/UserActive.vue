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
                    <tr class="table-contanier" v-for="item in newData">
                        <td>{{item.time}}</td>
                        <td>{{item.active_user}}</td>
                        <td class="bule_color">{{item.one_day}}</td>
                        <td class="bule_color">{{item.two_day}}</td>
                        <td class="bule_color">{{item.three_day}}</td>
                        <td class="bule_color">{{item.four_day}}</td>
                        <td class="bule_color">{{item.five_day}}</td>
                        <td class="bule_color">{{item.six_day}}</td>
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
            tableData:[
                {
                    time: '2022-09-01',
                    active_user: '1000',
                    one_day: '60%',
                    two_day: '55%',
                    three_day: '54%',
                    four_day: '59%',
                    five_day: '66%',
                    six_day: '70%'
                },
                {
                    time: '2022-09-02',
                    active_user: '600',
                    one_day: '70%',
                    two_day: '65%',
                    three_day: '54%',
                    four_day: '70%',
                    five_day: '66%',
                    six_day: '70%'
                },
                {
                    time: '2022-09-03',
                    active_user: '600',
                    one_day: '60%',
                    two_day: '55%',
                    three_day: '66%',
                    four_day: '69%',
                    five_day: '69%',
                    six_day: '70%'
                },
                {
                    time: '2022-09-04',
                    active_user: '1000',
                    one_day: '60%',
                    two_day: '59%',
                    three_day: '60%',
                    four_day: '66%',
                    five_day: '65%',
                    six_day: '67%'
                },
            ],
            newData:[
                {
                    time: '2022-09-01',
                    active_user: '1000',
                    one_day: '60%',
                    two_day: '55%',
                    three_day: '54%',
                    four_day: '59%',
                    five_day: '66%',
                    six_day: '70%'
                },
                {
                    time: '2022-09-02',
                    active_user: '600',
                    one_day: '70%',
                    two_day: '65%',
                    three_day: '54%',
                    four_day: '70%',
                    five_day: '66%',
                    six_day: '70%'
                },
                {
                    time: '2022-09-03',
                    active_user: '600',
                    one_day: '60%',
                    two_day: '55%',
                    three_day: '66%',
                    four_day: '69%',
                    five_day: '69%',
                    six_day: '70%'
                },
                {
                    time: '2022-09-04',
                    active_user: '1000',
                    one_day: '60%',
                    two_day: '59%',
                    three_day: '60%',
                    four_day: '66%',
                    five_day: '65%',
                    six_day: '67%'
                },
            ]
        }
    },
    methods:{
        searchOrder(){
            console.log(this.searchTime);
            // let beginTime = new Date(this.searchTime[0]);
            let beginTime = (this.searchTime[0]).getTime();
            let endTime = (this.searchTime[1]).getTime();
            let te = (new Date(this.tableData[0].time)).getTime();
            this.newData = []
            for(let i=0; i<this.tableData.length; i++){
                if((new Date(this.tableData[i].time)).getTime() >= beginTime && (new Date(this.tableData[i].time)) <= endTime){
                    this.newData.push(this.tableData[i])
                }
            }
            // console.log(newData);
            console.log(beginTime,endTime,te);
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