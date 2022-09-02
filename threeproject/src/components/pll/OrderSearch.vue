<template>
    <div>
        <div class="order-mgt-search">
            订单编号<el-input size="mini" v-model="searchInfo.inputNum" name="orderNum" placeholder="订单编号" class="search_input"></el-input>
            买家<el-input size="mini" v-model="searchInfo.inputBuyer" name="orderBuyer" placeholder="买家名称" class="search_input"></el-input>
            商品名称<el-input size="mini" v-model="searchInfo.inputGoodsName" name="orderName" placeholder="商品名称" class="search_input"></el-input>
            订单状态<template>
                <el-select size="mini" v-model="searchInfo.orderStateVal" placeholder="全部状态" class="search_input">
                    <el-option v-for="item in orderState" :key="item.value" :label="item.value" :value="item.value" />
                </el-select>
            </template>
            付款方式<template>
                <el-select size="mini" v-model="searchInfo.orderPayVal" placeholder="全部" class="search_input">
                    <el-option size="mini" v-for="item in orderPay" :key="item.value" :label="item.value" :value="item.value" />
                </el-select>
            </template>
            订单来源<template>
                <el-select size="mini" v-model="searchInfo.orderSourceVal" placeholder="全部" class="search_input">
                    <el-option size="mini" v-for="item in orderSource" :key="item.value" :label="item.value" :value="item.value" />
                </el-select>
            </template>

            下单时间<el-input size="mini" v-model="searchInfo.orderStartTime" name="orderNum" placeholder="起始时间" class="search_input"/>—
            <el-input size="mini" v-model="searchInfo.orderEndTime" name="orderBuyer" placeholder="结束时间" class="search_input"></el-input>
            <el-button type="primary" size="mini" @click="searchOrder">搜索</el-button>

        </div>
    </div>
</template>

<script>
export default{
    name: 'OrderSearch',
    data(){
        return {
            searchInfo:{
                inputNum: '',//订单编号
                inputBuyer: '', //买家ID
                inputGoodsName: '',//商品名称
                orderStartTime: '',//下单时间筛选开始时间
                orderEndTime: '',//结束时间
                orderStateVal: '',//订单状态
                orderPayVal: '',//付款方式
                orderSourceVal: '',//订单来源
            },
            orderState: [{   
                value: '待付款',
                }, {
                value: '待发货',
                }, {
                value: '待收货'
                }, {
                value: '待评价',
                }, {
                value: '已完成',
                },{
                    value: '已取消',
            }],
            
            orderPay: [{
                value: '微信支付',
                }, {
                value: '支付宝支付',
                }, {
                value: '银联支付',
                }, {
                value: '找人代付',
                }, {
                value: '账户余额支付',
            }],
            orderSource: [{
                value: 'PC端',
                }, {
                value: 'APP端',
                }, {
                value: '微信公众号',
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
    .order-mgt-search{
        width: 70%;
        height: 86px;
        align-items: center;
        margin: 10px 135px;
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
</style>