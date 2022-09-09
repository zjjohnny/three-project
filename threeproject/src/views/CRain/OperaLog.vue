<template>
  <div>
    <div class="header-title">操作日志</div>
    <div class="content-container">
      <table>
        <tr>
          <td>操作人</td>
          <td><input type="text" v-model="value1" /></td>
          <td>操作日期</td>
          <td>
            <!-- <input type="text" /> -->
            <el-date-picker
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
        <el-table
          :data="
            tableData.slice(
              (currentPage - 1) * pageSize,
              currentPage * pageSize
            )
          "
          style="width: 100%"
        >
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
          :current-page="currentPage"
          :page-sizes="[20, 40, 60]"
          :page-size="20"
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
      tableData: [],
      currentPage: 1,
      //每页显示条数
      pageSize: 20,
    };
  },
  methods: {
    /* 搜索按钮 */
    searchBtn() {
      this.getOperaLog(this.pageSize, this.currentPage, this.value1);
    },
    /* 每页显示多少条 */
    handleSizeChange(val) {
      this.pageSize = val;
      this.currentPage = 1;
    },
    /* 当前是第几页 */
    handleCurrentChange(val) {
      this.currentPage = val;
      //重新调用接口获取当页数据
      this.getOperaLog(this.pageSize, this.currentPage, "");
    },
    async getOperaLog(pageSize, currentPage, userName) {
      const res = await this.$axios({
        method: "get",
        url: "http://132.232.110.185/ssmTwo/queryUserLoggerByPage",
        params: {
          limit: pageSize,
          page: currentPage,
          "user.userName": userName,
        },
      });
      for (let i = 0; i < res.data.data.length; i++) {
        const obj = {
          operaPersonal: "",
          path: "",
          operaName: "",
          operaDate: "",
          address: "",
        };
        obj.operaPersonal = res.data.data[i].user.userName;
        // obj.path = res.data.data[i].permission.perName;//返回的数据部分的permission为null
        obj.operaName = res.data.data[i].detail;
        obj.operaDate = res.data.data[i].logCreateTime;
        obj.address = res.data.data[i].ip;
        this.tableData.push(obj);
      }
    },
  },
  created() {
    this.getOperaLog(20, 1, "");
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