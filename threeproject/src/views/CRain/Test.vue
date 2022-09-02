<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址">
        <template slot-scope="scope">
          <img :src="scope.row.address" min-width="70" height="70" />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "../../assets/",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "../../assets/logo.png",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "../../assets/logo.png",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "../../assets/logo.png",
        },
      ],
    };
  },
};
</script>

<style></style>