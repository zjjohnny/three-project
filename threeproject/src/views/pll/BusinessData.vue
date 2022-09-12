<template>
    <div>
        <div class="refund-mgt-title">业务数据</div>

        <div class="business-search-box">
            商品名称:&nbsp;<el-input size="mini" v-model="goods_name" placeholder="商品名称" class="search_input" />
            <el-button type="primary" size="mini" @click="exportData">导出</el-button>
            <el-button type="primary" size="mini" @click="searchGoods">搜索</el-button> 
        </div>

        <UserDataItem :dataTableHead="dataTableHead" :dataTableCont="dataTableCont" />
        <GoodsPage :pageTotal="pageTotal" @pageChange="pageChange"></GoodsPage>
    </div>
</template>

<script>
import DateSearch from '@/components/pll/DateSearch.vue';
import UserDataItem from '@/components/pll/UserDataItem.vue';
import GoodsPage from '@/components/pll/GoodsPage.vue';
export default{
    name: 'BusinessData',
    components: {
        DateSearch,
        UserDataItem,
        GoodsPage
    },
    data(){
        return{
            nowPage: 1,
            pageSize: 5,
            pageTotal: 0,
            goods_name: '',
            dataTableHead:['商品图片','商品名称','访问次数','购买件数','转化率'],
            dataTableCont:[]
        }
    },
    methods: {
        // 获取全部商品数据
        async getBusinessData(){
            const res = await this.$axios({
                method: "get",
                url: 'http://42.192.152.16:8080/ssmTwo/showAllGoods',
                params: {
                    page: this.nowPage,
                    limit: this.pageSize,
                },
            });
            this.dataTableCont = res.data.data;
            this.pageTotal = res.data.count;
            // console.log(res);
            
        },
        // 分页效果
        pageChange(item){
            this.nowPage = item.currentPage;
            this.pageSize = item.pageSize;
            this.getBusinessData()
        },
        // 商品名称搜索
        async searchGoods(){
            console.log(this.goods_name);
            const res = await this.$axios({
                method: 'get',
                url: 'http://42.192.152.16:8080/ssmTwo/selectGoodsByFeilds',
                params:{
                    page: this.nowPage,
                    limit: this.pageSize,
                    goodsName: this.goods_name
                },
            });
            // console.log(res);
            if(res.data.count == 0){
                alert("未搜索到相关信息")
            }else{
                // console.log(res);
                this.dataTableCont = res.data.data.list;
                this.pageTotal = res.data.count;
                // console.log(this.dataTableCont);
            }
        },
        //批量导出
        exportData() {
            console.log("导出用户数据");
            this.$axios({
                method: 'get',
                url: '/api/ssmTwo/downloadExclGoods',
                params:{
                    page: this.nowPage,
                    limit: this.pageSize,
                },
                responseType: 'blob'
            }).then((res) => {
                console.log(res);
                const url = window.URL.createObjectURL(new Blob([res.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', '商品数据.xls');
                document.body.appendChild(link);
                link.click();
            },
            (err) =>{
                console.log(err);
            })
        },
    },
    mounted(){
        this.getBusinessData()
    }
}
</script>

<style scoped>
    /* 搜索 */
    .business-search-box{
        width: 80%;
        margin: 10px auto;
        display: flex;
        height: 30px;
        align-items: center;
        font-size: 14px;
        color: gray;
    }
    .search_input{
        width: 150px;
        height: 28px;
        margin-right: 10px;
    }
</style>