<template>
    <div>
        <div class="refund-mgt-title">
            <div>用户数据</div>
        </div>

        <div id="echartsBox" ref='charts'></div>
        <div class="grayBg"></div>
        <DateSearh :dowUserData="dowUserData" @searchChange="searchChange"></DateSearh>
        <UserDataItem :dataTableHead="dataTableHead" :dataTableContainer="dataTableContainer" />
        <GoodsPage :pageTotal="pageTotal" @pageChange="pageChange"></GoodsPage>
    </div>
</template>

<script>
import * as echarts from 'echarts';
import UserDataItem from '@/components/pll/UserDataItem.vue';
import DateSearh from '@/components/pll/DateSearch.vue';
import GoodsPage from '@/components/pll/GoodsPage.vue';
export default{
    name: 'UserData',
    components: {
        UserDataItem,
        DateSearh,
        GoodsPage
    },
    data(){
        return{
            //echarts折线图
            mychart: null,
            option: null,
            dataList:[],

            // 用户数据表格信息
            dataTableHead:['用户头像','用户昵称','用户账号','手机号码','用户等级','注册时间'],
            dataTableContainer: [],
            nowPage: 1,
            pageSize: 6,
            pageTotal: 0
        }
    },
    mounted(){
        this.myCharts();
        this.getUserData();
    },
    methods:{
        async myCharts(){
            const res = await this.$axios({
                method: 'get',
                url: 'http://42.192.152.16:8080/ssmTwo/storeLineChart'
            })
            // console.log(res);
            for(let i=0; i<res.data.data.length;i++){
                this.dataList.push(res.data.data[i].count)
            }
            // console.log(this.dataList);
            this.mychart = echarts.init(document.getElementById('echartsBox'));
            this.option = {
                title: {
                    text: '近30天用户增长趋势'
                },
                xAxis: {
                    data: ['2021.12.01', '2021.12.05', '2021.12.10', '2021.12.15', '2021.12.20','2021.12.25','2021.12.30']
                },
                yAxis: {
                    // name: '近30天用户增长趋势'
                },
                series: [
                    {
                        // data: [1000, 3000, 4000, 4500, 2300,4000,3500],
                        data: this.dataList,
                        type: 'line',
                        smooth: true,
                        color:'#1296DB',
                        areaStyle: {}
                    }
                ]
            
            },
            this.mychart.setOption(this.option)
        },
        //获取用户数据
        async getUserData(){
            const res = await this.$axios({
                method: "get",
                url: 'http://42.192.152.16:8080/ssmTwo/showAllStores',
                params: {
                    page: this.nowPage,
                    limit: this.pageSize,
                },
            });
            this.dataTableContainer = res.data.data;
            this.pageTotal = res.data.count;
            // console.log(res);
            // console.log(this.dataTableContainer);
        },
        //导出用户数据
        dowUserData(){
            this.$axios({
                method: 'get',
                url: '/api/ssmTwo/downloadExclStore',
                responseType: 'blob'
            }).then((res) => {
                console.log(res);
                const url = window.URL.createObjectURL(new Blob([res.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', '用户数据.xls');
                document.body.appendChild(link);
                link.click();
            },
            (err) =>{
                console.log(err);
            })
        },

        // 分页效果
        pageChange(item){
            this.nowPage = item.currentPage;
            this.pageSize = item.pageSize;
            this.getUserData()
        },
        //按条件搜索用户数据
        async searchChange(item){
            console.log(item);
            const res = await this.$axios({
                method: 'get',
                url: 'http://42.192.152.16:8080/ssmTwo/selectStore',
                params:{
                    page: this.nowPage,
                    limit: this.pageSize,
                    storeName: item.userName,
                    phoneNum: item.userPhone,
                    storeAccount: item.userAccount,
                    startTime: item.begin_time,
                    endTime: item.end_time,
                },
            });
            if(res.data.count == 0){
                alert("未搜索到相关信息")
            }else{
                console.log(res);
                this.dataTableContainer = res.data.data;
                this.pageTotal = res.data.count;
            }
        },
        
    }
}
</script>

<style scoped>
    #echartsBox{
        width: 80%;
        margin: 10px auto;
        height: 400px;
    }
    .grayBg{
        background-color: lightgray;
        width: 100%;
        height: 10px;
        margin-bottom: 50px;
    }
</style>