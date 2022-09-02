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
                <tr>
                    <td rowspan="2">订单号</td>
                    <td>退款商品</td>
                    <td>退款金额</td>
                    <td>买家账号</td>
                    <td>申请时间</td>
                    <td>处理时间</td>
                    <td>退款状态</td>
                    <td>操作</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default{
    name: 'GoodsRefundItem',
    props: ['state', 'name'],
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
        searchOrder(){
            console.log(this.searchInfo);
        }
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
        border-collapse: collapse;
        font-size: 14px;
        color: gray;
    }
    table caption{
        font-size: 2em;
        font-weight: bold;
        margin: 1em 0;
    }
    td{
        border: 1px solid lightgray;
        text-align: center;
        padding: 5px 0;
    }
    /* table thead tr{
        background-color: #008c8c;
        color: #fff;
    } */
    
</style>