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
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    align="right">
                    </el-date-picker>
                </div>
                
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
                orderStateVal: '',//订单状态
                orderPayVal: '',//付款方式
                orderSourceVal: '',//订单来源
                dateVal: '', //下单时间选择
                begin_time: '',
                end_time: ''
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
                
            };
    },
    methods: {
        searchOrder(){
            console.log(this.searchInfo.dateVal);
            if(this.searchInfo.inputNum == '' && this.searchInfo.inputBuyer == '' && this.searchInfo.inputGoodsName == ''
             && this.searchInfo.orderStateVal == '' && this.searchInfo.orderPayVal == '' && this.searchInfo.orderSourceVal == '' && this.searchInfo.dateVal == ''){
                alert("请输入搜索信息");
            }else{
                if(this.searchInfo.dateVal == null || this.searchInfo.dateVal == ''){
                    this.searchInfo.begin_time = null;
                    this.searchInfo.end_time = null;
                    // console.log(this.searchInfo.end_time);
                }else if(this.searchInfo.dateVal != ''){
                    this.searchInfo.begin_time = this.filterTime(this.searchInfo.dateVal[0]);
                    this.searchInfo.end_time = this.filterTime(this.searchInfo.dateVal[1]);
                    console.log(this.searchInfo.begin_time);
                    // console.log(this.filterTime2(this.searchInfo.begin_time));
                }
                if(this.searchInfo.inputBuyer == ''){this.searchInfo.inputBuyer = null}
                if(this.searchInfo.inputGoodsName == ''){this.searchInfo.inputGoodsName = null}
                if(this.searchInfo.orderSourceVal == ''){this.searchInfo.orderSourceVal = null}
                if(this.searchInfo.inputNum == ''){this.searchInfo.inputNum = null}
                if(this.searchInfo.orderPayVal == ''){this.searchInfo.orderPayVal = null}
                if(this.searchInfo.orderStateVal == ''){this.searchInfo.orderStateVal = null}
                this.$emit('searchinfo',this.searchInfo)
            }
        },
        // 中国标准时间转换日期格式
        filterTime(val) {
            let date = new Date(val);
            let y = date.getFullYear();
            let m = date.getMonth() + 1;
            m = m < 10 ? "0" + m : m;
            let d = date.getDate();
            d = d < 10 ? "0" + d : d;
            let h = date.getHours();
            h = h < 10 ? "0" + h : h;
            let minute = date.getMinutes();
            minute = minute < 10 ? "0" + minute : minute;
            let s = date.getSeconds();
            s = s < 10 ? "0" + s : s;
            let time1 =  y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + s;

            // 日期格式转时间戳
            time1 = time1.replace(/-/g,'/');/// 将-替换成/，因为下面这个构造函数只支持/分隔的日期字符串
            let date1 = new Date(time1); // 构造一个日期型数据，值为传入的字符串
            let time = date1.getTime();
            return time
        },
        // 日期格式转时间戳
        filterTime2(val){
            val = val.replace(/-/g,'/');/// 将-替换成/，因为下面这个构造函数只支持/分隔的日期字符串
            let date = new Date(val); // 构造一个日期型数据，值为传入的字符串
            let time = date.getTime()+'';
            return time
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