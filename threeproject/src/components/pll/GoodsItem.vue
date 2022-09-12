<template>
    <div>
        <div class="goods_data_box">
            <div class="checkall_export">
                <el-checkbox v-model="checkAll" @change="checkedAll" class="input_checkbox">全选</el-checkbox>
                <el-button type="primary" size="mini" @click="exportData">批量导出</el-button>
            </div>
            <table class="goods_data_box_header table1">
                <tr class="table_header">
                    <td width="30%">
                        <span id="shangpin">商品</span>
                    </td>
                    <td><span>单价</span></td>
                    <td><span>数量</span></td>
                    <td><span>售后</span></td>
                    <td><span>交易状态</span></td>
                    <td><span>实收金额</span></td>
                    <td><span>操作</span></td>
                </tr>
            </table>

            <table class="goods_data_box_header table2" v-for="(item) in filterList" :key="item.id">
                <tr class="goods_item_head">
                    <td class="goods_title" colspan="7">
                        <input type="checkbox" :checked='checkItem' @click="" />
                        <!-- <el-checkbox :checked="checkItem" class="input_checkbox" /> -->
                        <span>订单编号：{{ item.orderNumber }}</span>
                        <span>下单时间：{{ item.creatTime | formatTime}}</span>
                        <span>买家：{{ item.buyer }}</span>
                    </td>
                </tr>
                <tr class="goods_item_con">
                    <td width="30%">
                        <div id="goods_container_img">
                            <img :src="`http://42.192.152.16:8080/imageUpload/${item.image}`" width="60px">
                            <div class="goods_container_title">
                                <span>{{ item.goodsName }}【交易快照】</span>
                                <span>交易保障</span>
                            </div>
                        </div>
                    </td>
                    <td width="10%">
                        <div class="goods_container_price">
                            <span>{{ item.price }}</span>
                        </div>
                    </td>
                    <td width="8%">{{ item.quantity }}</td> <!-- 商品数量 -->
                    <td width="9%"></td> <!-- 售后 -->
                    <td width="17%" :class="item.state == '1' ? 'no_pay' : ''">
                        <div v-if="item.state == '1'">待付款</div>
                        <div v-else-if="item.state == '2'">待发货</div>
                        <div v-else-if="item.state == '3'">待收货</div>
                        <div v-else-if="item.state == '4'">已完成</div>
                        <div v-else-if="item.state == '5'">已取消</div>
                        <div v-else-if="item.state == '6'">待评价</div>
                    </td>
                    <td width="16%">{{ item.moneyReceived }}</td> <!-- 实收金额 -->
                    <td width="12%" class="goods_caozuo">
                        <el-button v-if="item.state == '1'" type="text" @click="open(item.id)">修改价格</el-button>
                        <!-- <button v-if="item.state == '1'" @click="changePrice(item.id)">修改价格</button> -->
                        <button v-else-if="item.state == '2'" @click="faHuo(item.id)">发货</button>
                        <!-- <button v-else-if="item.state == '3' || item.state == '4' || item.state == '6'">查看物流</button> -->
                        <button
                            v-if="item.state == '1' || item.state == '2' || item.state == '3' || item.state == '6'" @click="cancelOrder(item.id)">取消订单</button>
                    </td>
                </tr>
                <tr class="zhanwei1">
                    <td colspan="7"></td>
                </tr>
            </table>
            
        </div>
        <GoodsPage :pageTotal="pageTotal" @pageChange="pageChange"></GoodsPage>
    </div>
</template>

<script>
import GoodsPage from './GoodsPage.vue';
export default {
    name: 'GoodsItem',
    props: ['state','searchIn'],
    components: {
        GoodsPage
    },
    filters: {
        // 时间戳转换
        formatTime(val){
            let date = new Date(val);
            let newtime = [date.getFullYear(),date.getMonth()-1,date.getDate()].join('-');
            let newt =[date.getHours(),date.getMinutes(),date.getSeconds()].join(':')
            return newtime + '  ' + newt;
        }
    },
    data() {
        return {
            goodsList: [
                {
                    id: '001',
                    o_oderNumber: '1111111111', //订单编号
                    o_orderTime: '2020/10/20 20:30:30',//下单时间
                    o_buyer: 'lilu-123445',//买家
                    o_orderImg: '../../assets/logo.png', //商品图片
                    o_productName: '商品名称', //商品名称
                    o_price: '￥888', //商品单价
                    o_quantity: '1', //商品数量
                    o_state: '待发货',//交易状态
                },
                {
                    id: '002',
                    o_oderNumber: '222222222222', //订单编号
                    o_orderTime: '2020/10/20 20:30:30',//下单时间
                    o_buyer: 'lilu-123445',//买家
                    o_orderImg: '../../assets/logo.png', //商品图片
                    o_productName: '商品名称', //商品名称
                    o_price: '￥888', //商品单价
                    o_quantity: '1', //商品数量
                    o_state: '待付款',//交易状态
                },
                {
                    id: '003',
                    o_oderNumber: '33333333333', //订单编号
                    o_orderTime: '2020/10/20 20:30:30',//下单时间
                    o_buyer: 'lilu-123445',//买家
                    o_orderImg: '../../assets/logo.png', //商品图片
                    o_productName: '商品名称', //商品名称
                    o_price: '￥999', //商品单价
                    o_quantity: '1', //商品数量
                    o_state: '待收货',//交易状态
                },
                {
                    id: '004',
                    o_oderNumber: '4444444444444', //订单编号
                    o_orderTime: '2020/10/20 20:30:30',//下单时间
                    o_buyer: 'lilu-123445',//买家
                    o_orderImg: '../../assets/logo.png', //商品图片
                    o_productName: '商品名称', //商品名称
                    o_price: '￥999', //商品单价
                    o_quantity: '1', //商品数量
                    o_state: '待评价',//交易状态
                },
                {
                    id: '005',
                    o_oderNumber: '555555555555', //订单编号
                    o_orderTime: '2020/10/20 20:30:30',//下单时间
                    o_buyer: 'lilu-123445',//买家
                    o_orderImg: '../../assets/logo.png', //商品图片
                    o_productName: '商品名称', //商品名称
                    o_price: '￥999', //商品单价
                    o_quantity: '1', //商品数量
                    o_state: '已完成',//交易状态
                },
                {
                    id: '006',
                    o_oderNumber: '66666666666666', //订单编号
                    o_orderTime: '2020/10/20 20:30:30',//下单时间
                    o_buyer: 'lilu-123445',//买家
                    o_orderImg: '../../assets/logo.png', //商品图片
                    o_productName: '商品名称', //商品名称
                    o_price: '￥999', //商品单价
                    o_quantity: '1', //商品数量
                    o_state: '已取消',//交易状态
                },
            ],
            filterList: [],
            checkItem: false,
            checkAll: '',
            // 分页数据
            nowPage: 1,
            pageSize: 5,
            pageTotal: 0,
            myurl: '',
            change_price: 0, //修改价格
            create_time: '',//下单时间
        }
    },
    methods: {
        open(item) {
            this.$prompt('输入修改价格',{
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            //   inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
            //   inputErrorMessage: '邮箱格式不正确'
            }).then(({ value }) => {
            // this.$message({
            //     type: 'success',
            //     message: '价格修改成功'
            // });
            this.change_price = parseFloat(value);
            this.changePrice(item)
            }).catch(() => {
            this.$message({
                type: 'info',
                message: '取消输入'
            });       
            });
        },
        //获取全部数据
        async getAllData(){
            const res = await this.$axios({
                method: 'get',
                url: 'http://42.192.152.16:8080/ssmTwo/Orders/showAllOrders',
                params: {
                    page: this.nowPage,
                    limit: this.pageSize
                }
            });
            console.log(res);
            this.pageTotal = res.data.count;
            this.goodsList = res.data.data;
            this.filterList = res.data.data;
            
        },
        // 分页效果
        pageChange(item){
            this.nowPage = item.currentPage;
            this.pageSize = item.pageSize;
            this.getAllData()
        },
        
        //全选
        checkedAll(value) {
            if (value) {
                this.checkItem = true;
                console.log(this.checkItem);
            } else {
                this.checkItem = false;
                console.log(this.checkItem);
            }
        },
        //批量导出
        exportData() {
            this.$axios({
                method: 'get',
                url: '/api/ssmTwo/Orders/downloadExclStore',
                responseType: 'blob'
            }).then((res) => {
                console.log(res);
                const url = window.URL.createObjectURL(new Blob([res.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', '商品信息表格.xls');
                document.body.appendChild(link);
                link.click();
            },
            (err) =>{
                console.log(err);
            })
            
            // console.log(this.goodsList);
            // localStorage.setItem('list',JSON.stringify(this.goodsList))
            // //导出数据
            // const exportData1 = () => {
            //     let goodsList = JSON.parse(localStorage.getItem('list'))
            //     //列标题
            //     let str = '<tr><td>序号</td><td>订单编号</td><td>下单时间</td><td>买家</td><td>商品图片地址</td><td>商品名称</td><td>商品单价</td><td>商品数量</td><td>商品状态</td></tr>';
            //     //循环遍历 每行加入tr标签 每个单元格加td标签
            //     for (let i = 0; i < goodsList.length; i++) {
            //         str += '<tr>';
            //         for (const key in goodsList[i]) {
            //             //增加\t为了不让表格显示科学记数法或者其他格式
            //             str += `<td>${goodsList[i][key] + '\t'}</td>`;
            //         }
            //         str += '</tr>';
            //     }
            //     //worksheet名
            //     const worksheet = 'sheet1'
            //     const uri = 'data:application/vnd.ms-excel;base64,';

            //     //下载的表格模板数据
            //     const template = `<html xmlns:o="urn:schemas-microsoft-com:office:office" 
            //         xmlns:x="urn:schemas-microsoft-com:office:excel" 
            //         xmlns="http://www.w3.org/TR/REC-html40">
            //         <head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>
            //         <x:Name>${worksheet}</x:Name>
            //         <x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet>
            //         </x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->
            //         </head><body><table>${str}</table></body></html>`;

            //     //下载模板
            //     window.location.href = uri + base64(template);
            // };

            // //输出base64编码
            // const base64 = s => window.btoa(unescape(encodeURIComponent(s)));
            // exportData1()

        },

        //改变订单状态
        //取消订单
        cancelOrder(item){
            console.log(item);
            this.$axios({
                method: 'post',
                url: 'http://42.192.152.16:8080/ssmTwo/Orders/Cancle',
                data: {
                    id: item
                }
            }).then((res)=>{
                console.log(res);
                // this.getAllData()
            },(err)=>{
                console.log(err);
            });
        },
        //发货
        faHuo(item){
            console.log(item);
            this.$axios({
                method: 'post',
                url: 'http://42.192.152.16:8080/ssmTwo/Orders/Send',
                params: {
                    id: item
                }
            }).then((res) => {
                console.log(res);
                alert("发货成功");
                this.getAllData()
            },(err) => {
                console.log(err);
            })
        },
        //修改价格
        changePrice(item){
            console.log(item,this.change_price);
            this.$axios({
                method: 'post',
                url: 'http://42.192.152.16:8080/ssmTwo/Orders/updateMoneyReceived',
                id: item,
                money: this.change_price
            }).then((res) => {
                console.log(res);
                console.log("修改成功");
            },(err) => {
                console.log(err);
            })
        },
        
    },
    watch: {
        // 导航切换状态
        state(){
            // console.log(this.state);
            if(this.state == '0'){
                this.getAllData();
                return 
            }
            if(this.state == '1'){
                this.myurl = 'http://42.192.152.16:8080/ssmTwo/Orders/selectPay'
            }else if(this.state == '2'){
                this.myurl = 'http://42.192.152.16:8080/ssmTwo/Orders/selectBySend'
            }else if(this.state == '3'){
                this.myurl = 'http://42.192.152.16:8080/ssmTwo/Orders/selectByharvested'
            }else if(this.state == '4'){
                this.myurl = 'http://42.192.152.16:8080/ssmTwo/Orders/selectByEvaluated'
            }else if(this.state == '5'){
                this.myurl = 'http://42.192.152.16:8080/ssmTwo/Orders/selectByCompleted'
            }else if(this.state == '6'){
                this.myurl = 'http://42.192.152.16:8080/ssmTwo/Orders/selectByCancle'
            }
            this.$axios({
                method: 'get',
                url: this.myurl,
                params: {
                    page: this.nowPage,
                    limit: this.pageSize,
                }
            }).then((res) => {
                if(res.data.count != 0){
                        this.pageTotal = res.data.count;
                        this.filterList = res.data.data;
                    }else{
                        alert('没有相关数据')
                    }
            })
        },
        // 搜索信息
        searchIn: function(val){
            console.log(val);
            console.log(val.inputNum);
            this.$axios({
                method: 'get',
                url: 'http://42.192.152.16:8080/ssmTwo/Orders/selectLikefield',
                params: {
                    page: this.nowPage,
                    limit: this.pageSize,
                    buyer: val.inputBuyer,
                    creatTime: val.begin_time,
                    endTime: val.end_time,
                    goodsName: val.inputGoodsName,
                    orderNumber: val.inputNum,
                    orderSource: val.orderSourceVal,
                    paymentMethod: val.orderPayVal,
                    state: val.orderStateVal
                }
            }).then((res) => {
                console.log(res);
                if(res.data.count > 0){
                    this.pageTotal = res.data.count;                
                    this.filterList = res.data.data;
                }else{
                    alert('没有相关数据');
                    this.getAllData()
                }
            },(err) => {
                console.log(err);
            })
        }
    },
    
    mounted() {
        this.getAllData()
    }
}
</script>

<style scoped>
/* 全选导出 */
.checkall_export {
    margin: 10px 0;
}

/* 最外部盒子 */
.goods_data_box {
    width: 75%;
    margin: 0 auto;
}

/* 表头盒子 */
.goods_data_box_header {
    border-collapse: collapse;
    width: 100%;
    height: 36px;
    margin-bottom: 5px;
    padding: 0 7px;
}

.table_header {
    height: 40px;
    background-color: lightgray;
}
#shangpin{
    margin-left: 10px;
}
/* 商品内容编号 买家信息盒子 */
.goods_data_box_info {
    border: 1px solid lightgray;
}

.goods_title {
    width: 100%;
    height: 28px;
    line-height: 28px;
    background-color: rgb(211, 224, 248);
    font-size: 14px;
    margin-left: 10px;
}

.goods_title span {
    margin-right: 50px;
}

/* 商品订单图片内容信息 */
#goods_container_img {
    display: flex;
    margin-left: 10px;
}

.goods_container_title {
    height: 60px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin-left: 4px;
}

.goods_container_title :first-child {
    font-size: 15px;
    margin-bottom: 5px;
}

.goods_container_title :last-child {
    font-size: 14px;
    color: gray;
}

.goods_caozuo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 72px;
}

.goods_caozuo button {
    width: 70px;
    margin: 2px;
}

.goods_caozuo :first-child {
    margin-top: 10px;
}

.goods_item_head {
    border-top: 1px solid lightgray;
    border-right: 1px solid lightgray;
    border-left: 1px solid lightgray;
}

.goods_item_con {
    height: 80px;
    border-bottom: 1px solid lightgray;
    border-right: 1px solid lightgray;
    border-left: 1px solid lightgray;
}

.zhanwei1 {
    height: 10px;
}

.no_pay {
    color: red;
}

/* 选择框 */
.input_checkbox {
    margin: 0 5px;
}
</style>