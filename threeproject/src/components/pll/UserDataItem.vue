<template>
    <div class="user_data_box">
        <div class="user_data_info">
            <table class="refund-table">
                <tr class="table-head">
                    <td v-for="(item,i) in dataTableHead" :key="i">{{item}}</td>
                    <!-- <td>用户头像</td>
                    <td>用户昵称</td>
                    <td>账号</td>
                    <td>手机号</td>
                    <td>等级</td>
                    <td>注册时间</td> -->
                </tr>
                
                <tr class="table-contanier" v-for="item in dataTableContainer"  v-if="dataTableHead.length ==6">
                    <td><img :src="item.user_img" class="user_img"></td>
                    <td>{{item.user_name}}</td>
                    <td>{{item.user_account}}</td>
                    <td>{{item.user_phone}}</td>
                    <td>{{item.user_level}}</td>
                    <td>{{item.user_retime}}</td>
                
                    <!-- <td><img src="../../assets/userImg.jpg" alt="" class="user_img"></td>
                    <td>一只羊</td>
                    <td>admin123</td>
                    <td>18000000000</td>
                    <td>1</td>
                    <td>2021-10-20 10：13</td> -->
                </tr>
                <tr class="table-contanier" v-for="item in dataTableCont" v-if="dataTableHead.length ==5">
                    <!-- <td><img :src="item.goods_img" class="goods_img"></td> -->
                    <td><img src="../../assets/userImg.jpg" alt="" width="50px"></td>
                    <td>{{item.goods_name}}</td>
                    <td>{{item.goods_visit_time}}</td>
                    <td>{{item.goods_buyed_num}}</td>
                    <td>{{item.goods_percent_conversion}}</td>
                    
                </tr>
            </table>
        </div>
        
    </div>
</template>

<script>
import GoodsPage from './GoodsPage.vue';

export default{
    name: 'UserDataItem',
    components: {
        GoodsPage
    },
    props: ['dataTableHead', 'dataTableContainer','dataTableCont'],
    data(){
        return{
            
        }
    },
    methods: {
       
    }
}
</script>

<style scoped>
    .user_data_box{
        width: 80%;
        margin: 30px auto;
    }
    

    /* 用户数据信息table */
    .user_img{
        width: 40px;
        height: 40px;
        border-radius: 20px;
    }
    table{
        width: 100%;
        border-collapse: collapse;  /*表格合并 */
        font-size: 14px;
    }
    td{
        border: 1px solid lightgray;
        text-align: center;
        padding: 5px 0;
    }
    .table-head{
        height: 40px;
    }
    .table-contanier{
        height: 60px;
    }
</style>