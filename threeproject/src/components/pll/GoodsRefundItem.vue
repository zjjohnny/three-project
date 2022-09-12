<template>
    <div class="refount_view">
        <div class="refund-mgt-search">
            订单编号<el-input size="mini" v-model="searchInfo.inputNum" name="orderNum" placeholder="订单编号" class="search_input"></el-input>
            买家<el-input size="mini" v-model="searchInfo.inputBuyer" name="orderBuyer" placeholder="买家账号" class="search_input"></el-input>
            商品名称<el-input size="mini" v-model="searchInfo.inputGoodsName" name="orderName" placeholder="商品名称" class="search_input"></el-input>
            退款状态<template>
                <el-select size="mini" v-model="searchInfo.refundStates" placeholder="全部" class="search_input">
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
                <tr class="table-contanier" v-for="(item,i) in refundDataAll">
                    <td>{{item.orderNumber}}</td>
                    <td>{{item.goodsName}}</td>
                    <td>{{item.remoney}}</td>
                    <td>{{item.account}}</td>
                    <td>{{item.applTime}}</td>
                    <td>{{item.dealTime}}</td>
                    <td>
                        <span v-if="item.refState == 3">退款关闭</span>
                        <span v-else-if="item.refState == 1">退款成功</span>
                        <span v-else-if="item.refState == 2">待处理</span>
                    </td>
                    <td class="table-check" @click="checkDetail(item)">查看</td>
                </tr>
            </table>
        </div>

        <GoodsPage :pageTotal="pageTotal" @pageChange="pageChange"></GoodsPage>
    </div>
</template>

<script>
import GoodsPage from './GoodsPage.vue';
export default{
    name: 'GoodsRefundItem',
    props: ['state'],
    components: {
        GoodsPage
    },
    data(){
        return {
            searchInfo:{
                inputNum: '',//订单编号
                inputBuyer: '', //买家ID
                inputGoodsName: '',//商品名称
                refundStates: '',//退款状态
            },
            refundStateVal: [{   
                value: '退款成功',
                }, {
                value: '待处理',
                }, {
                value: '退款失败'
            }],
            refundDataAll: [], //退款所有数据
            nowPage: 1,
            pageSize: 5,
            pageTotal: 0
            
            
        }
    },
    watch: {
        // nav切换状态sate监听
        state(){
            this.clearSearchIn()
            if(this.state == '1'){
                this.$axios({
                    method: 'get',
                    url: 'http://42.192.152.16:8080/ssmTwo/selectByState'
                }).then((res) => {
                    console.log(res);
                    if(res.data.count > 0){
                        this.refundDataAll = res.data.data.list;
                        this.pageTotal = res.data.count
                    }else{
                        alert("暂无待处理")
                    }
                },(err) => {
                    console.log(err);
                })
            }else if(this.state == '0'){
                this.getRefundData()
            }
        }
    },
    methods: {
        //清空搜索框
        clearSearchIn(){
            this.searchInfo.inputBuyer = '';
            this.searchInfo.inputGoodsName = '';
            this.searchInfo.inputNum = '';
            this.searchInfo.refundStates = '';
        },
        //获取退款全部数据
        getRefundData(){
            this.$axios({
                method: 'get',
                url: 'http://42.192.152.16:8080/ssmTwo/selectLike',
                params: {
                    page: this.nowPage,
                    limit: this.pageSize,
                },
            }).then((res) => {
                // console.log(res);
                if(res.data.data.total > 0){
                    this.refundDataAll = res.data.data.list;
                    this.pageTotal = res.data.data.total
                }
            },(err) => {
                console.log(err);
            })
        },
        // 分页效果
        pageChange(item){
            this.nowPage = item.currentPage;
            this.pageSize = item.pageSize;
            this.getRefundData()
        },
        // 搜索查询
        searchOrder(){
            if(this.searchInfo.refundStates == '退款成功'){
                this.searchInfo.refundStates = 1;
            }else if(this.searchInfo.refundStates == '待处理'){
                this.searchInfo.refundStates = 2;
            }else if(this.searchInfo.refundStates == '退款失败'){
                this.searchInfo.refundStates = 3;
            }else if(this.searchInfo.refundStates == ''){
                this.searchInfo.refundStates = null
            }
            if(this.searchInfo.inputNum == ''){
                this.searchInfo.inputNum = null
            }
            if(this.searchInfo.inputBuyer == ''){
                this.searchInfo.inputBuyer = null
            }
            
            console.log(this.searchInfo);
            this.$axios({
                method: 'get',
                url: 'http://42.192.152.16:8080/ssmTwo/selectLike',
                params: {
                    page: this.nowPage,
                    limit: this.pageSize, 
                    orderNumber: this.searchInfo.inputNum,
                    refState: this.searchInfo.refundStates,
                    account: this.searchInfo.inputBuyer,
                    // goodsName: this.searchInfo.inputGoodsName,
                }
            }).then((res) => {
                console.log(res);
                if(res.data.data != null){
                    this.refundDataAll = res.data.data.list;
                    this.pageTotal = res.data.data.total
                }else{
                    alert("未搜索到相关信息");
                    this.clearSearchIn()
                }

            })
        },
        // 点击查看退款详情
        checkDetail(item){
            // console.log(item);
            this.$router.push({path:'/RefundDetail',query:{info:item}})
        },

        
    },
    created(){
        this.getRefundData()
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