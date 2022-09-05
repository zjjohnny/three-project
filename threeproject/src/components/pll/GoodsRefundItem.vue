<template>
    <div class="refount_view">
        <div>{{state}}{{name}}</div>
        <div class="refund-mgt-search">
            订单编号<el-input size="mini" v-model="searchInfo.inputNum" name="orderNum" placeholder="订单编号" class="search_input"></el-input>
            买家<el-input size="mini" v-model="searchInfo.inputBuyer" name="orderBuyer" placeholder="买家名称" class="search_input"></el-input>
            商品名称<el-input size="mini" v-model="searchInfo.inputGoodsName" name="orderName" placeholder="商品名称" class="search_input"></el-input>
            退款状态<template>
                <el-select size="mini" v-model="searchInfo.orderStateVal" placeholder="全部" class="search_input">
                    <el-option v-for="item in refundStateVal" :key="item.value" :label="item.value" :value="item.value" />
                </el-select>
            </template>
            <el-button type="primary" size="mini" @click="searchOrder">搜索</el-button>
        </div>
        <div class="refund-table-date">
            <table class="refund-table">
                <tr class="table-head">
                    <td>订单号</td>
                    <td>退款商品</td>
                    <td>退款金额</td>
                    <td>买家账号</td>
                    <td>申请时间</td>
                    <td>处理时间</td>
                    <td>退款状态</td>
                    <td>操作</td>
                </tr>
                <tr class="table-contanier">
                    <td>2021121937827297</td>
                    <td>订单所有商品</td>
                    <td>￥8213.30</td>
                    <td>18000000000</td>
                    <td>2022/6/19</td>
                    <td>2022/6/19</td>
                    <td>退款关闭</td>
                    <td class="table-check" @click="checkDetail">查看</td>
                </tr>
            </table>
        </div>

        <GoodsPage></GoodsPage>
    </div>
</template>

<script>
import GoodsPage from './GoodsPage.vue';
export default{
    name: 'GoodsRefundItem',
    props: ['state', 'name'],
    components: {
        GoodsPage
    },
    data(){
        return {
            searchInfo:{
                inputNum: '',//订单编号
                inputBuyer: '', //买家ID
                refundStates: '',//退款状态
            },
            refundStateVal: [{   
                value: '退款成功',
                }, {
                value: '待处理',
                }, {
                value: '退款失败'
            }],
            
        }
    },
    methods: {
        // 搜索查询
        searchOrder(){
            console.log(this.searchInfo);
        },
        // 点击查看退款详情
        checkDetail(){
            this.$router.replace('/RefundDetail')
        },

        
    }
}
</script>

<style scoped>
    .refount_view{
        width: 80%;
        margin: 0 auto;
    }
    /* 搜索 */
    .refund-mgt-search{
        width: 90%;
        height: 86px;
        align-items: center;
        font-size: 14px;
        display: flex;
        flex-wrap: wrap;
        color: gray;
        /* justify-content: center; */
    }
    .search_input{
        width: 150px;
        height: 28px;
        margin: 0 20px 0 4px;
    }

    /* 表格 */
    table{
        width: 90%;
        border-collapse: collapse;  /*表格合并 */
        font-size: 14px;
    }
    td{
        border: 1px solid lightgray;
        text-align: center;
        padding: 5px 0;
    }
    .table-head{
        height: 20px;
    }
    .table-contanier{
        height: 60px;
    }
    .table-check{
        color: blue;
        cursor: pointer;
    }
    
</style>