<template>
  <div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        background
        :page-size="page.limit"
        :pager-count="7"
        :current-page.sync="page.page"
        :page-sizes="[5, 10, 15, 20]"
        layout="prev, pager, next, sizes, jumper"
        :total="page.total"
        class="page"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: {
        page: 1, //当前页
        limit: 5, //每页条数
        total: 0, //总条数
      },
    };
  },
  methods: {
    handleSizeChange(val) {
      this.page.page = 1;
      this.page.limit = val;
      console.log("%c ======>>>>>>>>", "color:orange;", this.page);
      this.$emit("changPage");
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.$emit("changPage");
    },
  },
};
</script>

<style>
</style>