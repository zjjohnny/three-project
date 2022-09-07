<template>
    <div>
        <!-- 分页 -->
        <div class="block">
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            
            :page-sizes="[5, 10, 15, 20]"
            :page-size="page.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="pageTotal">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default{
    name: 'GoodsPage',
    props:['pageTotal'],
    data(){
        return{
            page:{
                currentPage: 1,
                pageSize: 5
            }
           
        }
    },
    methods: {
        handleSizeChange(val) {
            this.page.pageSize = val;
            console.log(`每页 ${val} 条`);
            this.$emit('pageChange', this.page)
        },
        handleCurrentChange(val) {
            this.page.currentPage = val;
            console.log(`当前页: ${val}`);
            this.$emit('pageChange',this.page);
        }
    }
}
</script>

<style scoped>
    .block{
        float: right;
        margin: 30px 13% 50px 0;
    }
</style>