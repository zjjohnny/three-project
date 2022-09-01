<template>
    <div>
        <div class="order-mgt-search">
            订单编号<el-input size="mini" v-model="input" name="orderNum" placeholder="订单编号" class="search_input"></el-input>
            买家<el-input size="mini" v-model="input" name="orderBuyer" placeholder="买家名称" class="search_input"></el-input>
            商品名称<el-input size="mini" v-model="input" name="orderName" placeholder="商品名称" class="search_input"></el-input>
            订单状态<template>
                <el-select size="mini" v-model="orderStateVal" placeholder="全部状态" class="search_input">
                    <el-option v-for="item in orderState" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </template>
            付款方式<template>
                <el-select size="mini" v-model="orderPayVal" placeholder="全部" class="search_input">
                    <el-option size="mini" v-for="item in orderPay" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </template>
            订单来源<template>
                <el-select size="mini" v-model="orderSourceVal" placeholder="全部" class="search_input">
                    <el-option size="mini" v-for="item in orderSource" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </template>

            下单时间<el-input size="mini" v-model="input" name="orderNum" placeholder="起始时间" class="search_input"/>—
            <el-input size="mini" v-model="input" name="orderBuyer" placeholder="结束时间" class="search_input"></el-input>
            <el-button type="primary" size="mini">搜索</el-button>

        </div>
    </div>
</template>

<script>
export default{
    name: 'OrderSearch',
    data(){
        return {
            input: '',
            orderState: [{
                value: '选项1',
                label: '待付款'
                }, {
                value: '选项2',
                label: '待发货'
                }, {
                value: '选项3',
                label: '待收货'
                }, {
                value: '选项4',
                label: '待评价'
                }, {
                value: '选项5',
                label: '已完成'
                },{
                    value: '选项6',
                    label: '已取消'
            }],
            orderStateVal: '',
            orderPay: [{
                value: '选项1',
                label: '微信支付'
                }, {
                value: '选项2',
                label: '支付宝支付'
                }, {
                value: '选项3',
                label: '银联支付'
                }, {
                value: '选项4',
                label: '找人代付'
                }, {
                value: '选项5',
                label: '账户余额支付'
            }],
            orderPayVal: '',
            orderSource: [{
                value: '选项1',
                label: 'PC端'
                }, {
                value: '选项2',
                label: 'APP端'
                }, {
                value: '选项3',
                label: '微信公众号'
            }],
            orderSourceVal: '',

            
    
        }
    }
}
</script>

<style scoped>
    .order-mgt-search{
        width: 70%;
        height: 86px;
        align-items: center;
        margin: 10px auto;
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