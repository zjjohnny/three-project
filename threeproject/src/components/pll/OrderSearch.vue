<template>
    <div>
        <div class="order-mgt-search">
            订单编号<el-input size="mini" v-model="searchInfo.inputNum" name="orderNum" placeholder="订单编号" class="search_input"></el-input>
            买家<el-input size="mini" v-model="searchInfo.inputBuyer" name="orderBuyer" placeholder="买家名称" class="search_input"></el-input>
            商品名称<el-input size="mini" v-model="searchInfo.inputGoodsName" name="orderName" placeholder="商品名称" class="search_input"></el-input>
            订单状态
            <el-select size="mini" v-model="searchInfo.orderStateVal" placeholder="全部状态" class="search_input">
                <el-option v-for="item in orderState" :key="item.value" :label="item.value" :value="item.value" />
            </el-select>
        
            <div class="payfor">
                    付款方式
                <el-select size="mini" v-model="searchInfo.orderPayVal" placeholder="全部" class="search_input">
                    <el-option size="mini" v-for="item in orderPay" :key="item.value" :label="item.value" :value="item.value" />
                </el-select>
            
                订单来源
                <el-select size="mini" v-model="searchInfo.orderSourceVal" placeholder="全部" class="search_input">
                    <el-option size="mini" v-for="item in orderSource" :key="item.value" :label="item.value" :value="item.value" />
                </el-select>
        
                <div class="block">
                    <span class="demonstration">下单时间</span>
                    <el-date-picker size="mini"
                    v-model="searchInfo.dateVal"
                    type="datetimerange"
                    :picker-options="pickerOptions"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    align="right">
                    </el-date-picker>
                </div>
                <!-- 下单时间<el-input size="mini" v-model="searchInfo.orderStartTime" name="orderNum" placeholder="起始时间" class="search_input"/>—
                <el-input size="mini" v-model="searchInfo.orderEndTime" name="orderBuyer" placeholder="结束时间" class="search_input"></el-input> -->
                
                <el-button type="primary" size="mini" @click="searchOrder">搜索</el-button>

            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'OrderSearch',
    // props: ['pickerOptions','dateVal'],
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
                dateVal: '' //下单时间选择
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
                
            };
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
        width: 75%;
        height: 86px;
        align-items: center;
        margin: 10px auto;
        font-size: 14px;
        display: flex;
        flex-wrap: wrap;
        color: gray;
        /* justify-content: center; */
    }
    .payfor{
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        height: 40px;
    }
    .search_input{
        width: 150px;
        height: 28px;
        margin: 0 26px 0 4px;
    }
    .el-date-editor--datetimerange.el-input__inner {
        width: 340px;
    }
    .block{
        margin-right: 10px;
    }
    .demonstration{
        margin-right: 4px;
    }
</style>