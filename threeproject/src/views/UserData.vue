<template>
    <div>
        <div class="refund-mgt-title">
            <div>用户数据</div>
        </div>

        <div id="echartsBox" ref='charts'></div>
        <DateSear></DateSear>
        <UserDataItem :dataTableHead="dataTableHead" :dataTableContainer="dataTableContainer" />
        <GoodsPage></GoodsPage>
    </div>
</template>

<script>
import * as echarts from 'echarts';
import UserDataItem from '@/components/pll/UserDataItem.vue';
import DateSear from '@/components/pll/DateSearch.vue';
import GoodsPage from '@/components/pll/GoodsPage.vue';
export default{
    name: 'UserData',
    components: {
        UserDataItem,
        DateSear,
        GoodsPage
    },
    data(){
        return{
            mychart: '',
            option: {
                xAxis: {
                    data: ['2021.12.01', '2021.12.05', '2021.12.10', '2021.12.15', '2021.12.20','2021.12.25','2021.12.30']
                },
                yAxis: {
                    name: '近30天用户增长趋势'
                },
                series: [
                    {
                        data: [1000, 3000, 4000, 4500, 2300,4000,3500],
                        type: 'line',
                        smooth: true,
                        color:'#1296DB',
                        areaStyle: {}
                    }
                ]
            
            },
            // 用户数据表格信息
            dataTableHead:['用户头像','用户昵称','用户账号','手机号码','用户等级','注册时间'],
            dataTableContainer: [
                {
                    user_img: 'qqq',
                    user_name:'一只羊',
                    user_account:'ww11111',
                    user_phone:'188888888',
                    user_level: '1',
                    user_retime: '2021-10-20 20:18'
                },
                {
                    user_img: '/assets/userImg.jpg',
                    user_name:'一条狗',
                    user_account:'ww11111',
                    user_phone:'188888888',
                    user_level: '1',
                    user_retime: '2021-10-20 20:18'
                },
            ]
        }
    },
    mounted(){
        this.myCharts()
    },
    methods:{
        myCharts(){
            this.mychart= echarts.init(document.getElementById('echartsBox'));
            this.mychart.setOption(this.option)
            //图表自适应
            window.addEventListener("resize",function(){
                this.mychart.resize()  // myChart 是实例对象
            })
        }
    }
}
</script>

<style scoped>
    #echartsBox{
        width: 80%;
        margin: 10px auto;
        height: 400px;
    }
</style>