<template>
  <div>
    <div class="header-title">操作日志</div>
    <div class="content-container">
      <table>
        <tr>
          <td>操作人</td>
          <td><input type="text" /></td>
          <td>操作日期</td>
          <td>
            <!-- <input type="text" /> -->
            <el-date-picker
              v-model="value1"
              type="daterange"
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              size="mini"
              value-format="yyyy-MM-dd"
            >
            </el-date-picker>
          </td>
          <td><button @click="searchBtn">搜索</button></td>
        </tr>
      </table>
      <!-- 表格内容区域 -->
      <div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column
            prop="operaPersonal"
            label="操作人"
            width="100"
          ></el-table-column>
          <el-table-column
            prop="path"
            label="路径"
            width="250"
          ></el-table-column>
          <el-table-column prop="operaName" label="操作名称" width="200">
          </el-table-column>
          <el-table-column prop="operaDate" label="操作日期" width="200">
          </el-table-column>
          <el-table-column prop="address" label="IP" width="200">
          </el-table-column>
        </el-table>
      </div>
      <!-- 分页 -->
      <div class="page-box">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OperaLog",
  data() {
    return {
      value1: "",
      tableData: [
        {
          operaPersonal: "夏弥",
          path: "首页-发布商品",
          operaName: "发布商品",
          operaDate: "2021-06-27 14:40",
          address: "322.240.184.100",
        },
        {
          operaPersonal: "夏弥",
          path: "商品管理-编辑商品",
          operaName: "编辑商品",
          operaDate: "2021-06-27 14:40",
          address: "322.240.184.100",
        },
        {
          operaPersonal: "夏弥",
          path: "首页-发布商品",
          operaName: "发布商品",
          operaDate: "2021-06-27 14:40",
          address: "322.240.184.100",
        },
        {
          operaPersonal: "夏弥",
          path: "首页-发布商品",
          operaName: "发布商品",
          operaDate: "2021-06-27 14:40",
          address: "322.240.184.100",
        },
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
    };
  },
  methods: {
    searchBtn() {
      console.log(this.value1);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    getOperaLog() {
      this.$axios({
        method: "get",
        url: "http://132.232.110.185/ssmTwo/queryUserLoggerByPage",
        params: {
          limit: "1",
          page: "1",
        },
      })
        .then(
          (res) => {
            console.log(res);
          },
          (err) => {}
        );
    },
  },
  created() {
    this.getOperaLog();
  },
};
</script>

<style scoped>
.header-title {
  line-height: 80px;
  font-size: 28px;
  border-bottom: 1px solid #efefef;
  text-align: center;
  color: #666666;
}
.content-container {
  padding: 50px 500px 50px 50px;
}
table {
  color: #333;
  margin-bottom: 20px;
}
table input {
  margin-left: 5px;
  margin-right: 20px;
}
table button {
  border-radius: 2px;
  border: none;
  background-color: #3598e8;
  font-size: 13px;
  color: #fff;
  padding: 5px 20px;
}
.page-box {
  float: right;
  margin-top: 50px;
}
</style>