<template>
  <div>
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
          <span>商品分类</span>
          <el-input v-model="category" placeholder="请输入内容"></el-input>
        </li>
      </ul>
      <ul class="secdonpart">
        <li>
          <span class="spantext">商品价格</span
          ><el-input class="sellsinput" v-model="inputmoney1"></el-input
          >-<el-input v-model="inputmoney2" class="sellsinput"></el-input>
        </li>
        <li>
          <span>产品销量</span
          ><el-input v-model="sells1" class="sellsinput"></el-input>-<el-input
            v-model="sells2"
            class="sellsinput"
          ></el-input>
        </li>
      </ul>
      <div class="btncontent">
        <el-button type="success">搜索</el-button>
        <el-button type="info">重置</el-button>
      </div>
    </div>
    <div class="btnarr">
      <el-button type="primary">发布商品</el-button>
    </div>

    <!-- 表格部分 -->
    <div class="tableteam">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="goodsName" label="商品名称" width="250">
        </el-table-column>
        <el-table-column prop="category" label="商品分类" width="160">
        </el-table-column>
        <el-table-column prop="price" label="商品价格" width="160">
        </el-table-column>
        <el-table-column prop="sales" label="累计销量" width="160">
        </el-table-column>
        <el-table-column prop="sales" label="商品排位" width="160">
        </el-table-column>
        <el-table-column prop="stock" label="库存" width="160">
        </el-table-column>

        <el-table-column label="操作" width="170">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >恢复到仓库</el-button
          >
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="divadepage">
      <divadepage></divadepage>
    </div>
  </div>
</template>

<script>
import Divadepage from "./divadepage.vue";
export default {
  name: "Comodiityrecicle",
  components: { Divadepage },
  data() {
    return {
      sells1: "", //销量查询1
      sells2: "", //銷量查詢2
      inputmoney1: "", //商品价格查询1
      inputmoney2: "", //商品价格查询2
      input: "", //商品名称查询
      inputid: "", //商品id查询
      category: "", //搜索商品分类
      tableData: [],
    };
  },
  methods: {
    handleClick(id) {
      console.log("%c ======>>>>>>>>", "color:orange;", id);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      // console.log("%c ======>>>>>>>>", "color:orange;", val); 多选框选择的列的数据
    },
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

.divadepage {
  margin: 30px 80px;
  display: flex;
  justify-content: end;
}

.tableteam {
  margin: 30px 80px;
}
</style>