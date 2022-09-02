<template>
  <div class="bigcontnet">
    <!-- 头部 -->
    <div>
      <Inputteams><span slot="h1titel">商品评论</span></Inputteams>
    </div>
    <div class="serchpart">
      <ul>
        <li>
          <span>商品名称</span
          ><el-input v-model="input" placeholder="请输入内容"></el-input>
        </li>
        <li>
          <span>商品ID</span
          ><el-input v-model="inputid" placeholder="请输入内容"></el-input>
        </li>
        <li>
          <span>评价类型</span>
          <el-select v-model="valueselct" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </li>
      </ul>
      <div class="btncontent">
        <el-button type="success">搜索</el-button>
        <el-button type="info">重置</el-button>
      </div>
    </div>
    <!-- 表格部分 -->
    <div class="tableteam">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="评价内容" width="180">
        </el-table-column>
        <el-table-column prop="name" label="被评商品" width="180">
        </el-table-column>
        <el-table-column prop="address" label="评价类型"> </el-table-column>
        <el-table-column prop="address" label="评价人"> </el-table-column>
        <el-table-column prop="address" label="订单编号"> </el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >回复</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="divadepage">
      <divadepageVue></divadepageVue>
    </div>
  </div>
</template>


<script>
import Inputteams from "@/components/Commodity Management/Commodity title.vue";
import divadepageVue from "@/components/Commodity Management/divadepage.vue";
export default {
  components: {
    Inputteams,divadepageVue
  },
  data() {
    return {
      input: "", //商品名称查询
      inputid: "", //商品id查询
      valueselct: "", //商品分类的数据option
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.serchpart {
  margin-top: 30px;
  > ul {
    // width: 80%;
    display: flex;
    // justify-content: space-between;
    margin-bottom: 30px;
    > li {
      display: flex;
      align-items: center;
      width: calc(100% / 4);
      margin-left: 40px;
      > span {
        width: 100px !important;
        // padding-right: 10px;
      }
    }
  }
}

.sellsinput {
  width: 39px !important;
}

.btnarr {
  display: flex;
  justify-content: space-between;
  margin: 0 80px;
}

.btncontent {
  margin-left: 80px;
  margin-bottom: 30px;
}

.tableteam {
  margin: 30px 80px;
}
.divadepage {
  margin: 30px 80px;
  display: flex;
  justify-content: end;
}
.bigcontnet {
 width: 100%; 
  min-width: 1200px;
}
</style>