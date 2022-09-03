<template>
  <div>
    <!-- 搜索部分 -->
    <div class="serchpart">
      <ul>
        <li>
          <span>商品名称</span
          ><el-input
            v-model="srceen.goodsName"
            placeholder="请输入内容"
          ></el-input>
        </li>
        <li>
          <span>商品ID</span
          ><el-input v-model="srceen.id" placeholder="请输入内容"></el-input>
        </li>
        <li>
          <span>商品分类</span>
          <el-input
            v-model="srceen.category"
            placeholder="请输入内容"
          ></el-input>
        </li>
      </ul>
      <ul class="secdonpart">
        <li>
          <span class="spantext">商品价格</span
          ><el-input class="sellsinput" v-model="srceen.smallPrice"></el-input
          >-<el-input v-model="srceen.bigPrice" class="sellsinput"></el-input>
        </li>
        <li>
          <span>产品销量</span
          ><el-input v-model="srceen.smallSales" class="sellsinput"></el-input
          >-<el-input v-model="srceen.bigSales" class="sellsinput"></el-input>
        </li>
      </ul>
      <div class="btncontent">
        <el-button type="success" @click="serch">搜索</el-button>
        <el-button type="info">重置</el-button>
      </div>
    </div>
    <!-- 发布删除 下架功能 -->
    <div class="btnarr">
      <el-button type="primary">发布商品</el-button>
      <div>
        <el-button>批量删除</el-button>
        <el-button>批量下架</el-button>
      </div>
    </div>
    <!-- table -->
    <div class="tableteam">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
        :default-sort="{
          prop: 'creationTime, releaseTime,price, stock,sales',
          order: 'descending',
        }"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="goodsName" label="商品名称" width="250">
        </el-table-column>
        <el-table-column prop="price" label="商品价格" width="160" sortable>
        </el-table-column>
        <el-table-column prop="stock" label="商品库存" width="160" sortable>
        </el-table-column>
        <el-table-column prop="sales" label="商品销量" width="160" sortable>
        </el-table-column>
        <el-table-column
          label="创建时间"
          width="190"
          prop="creationTime"
          sortable
        >
          <template slot-scope="scope">{{ scope.row.creationTime }}</template>
        </el-table-column>
        <el-table-column
          label="发布日期"
          width="190"
          prop="releaseTime"
          sortable
        >
          <template slot-scope="scope">{{ scope.row.releaseTime }}</template>
        </el-table-column>
        <el-table-column label="操作" width="170">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >编辑商品</el-button
          >
          <el-button @click="downClick(scope.row)" type="text" size="small"
            >立即下架</el-button
          >
          <el-button @click="deletClick(scope.row)" type="text" size="small"
            >删除商品</el-button
          >
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页部分 -->
    <div class="divadepage">
      <divadepageVue ref="pageing" @changPage="getlsit"></divadepageVue>
    </div>
  </div>
</template>

<script>
import divadepageVue from "./divadepage.vue";
export default {
  components: { divadepageVue },
  name: "Allproduct",
  data() {
    return {
      // sells1: "", //销量查询1
      // sells2: "", //銷量查詢2
      // inputmoney1: "", //商品价格查询1
      // inputmoney2: "", //商品价格查询2
      // input: "", //商品名称查询
      // inputid: "", //商品id查询
      // category: "", //商品分类
      tableData: [],
      multipleSelection: [], //多选框数据
      srceen: {
        goodsName: "",
        id: "",
        category: "",
        bigPrice: "",
        smallPrice: "",
        bigSales: "",
        smallSales: "",
      },
    };
  },
  mounted() {
    // this.init();
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
      // console.log("%c ======>>>>>>>>", "color:orange;", val); 多选框选择的列的数据
    },
    // 编辑商品
    handleClick(row) {
      console.log(row); //编辑商品得到这一列的信息
    },
    // 删除商品
    deletClick(row) {
      console.log(row); //编辑商品得到这一列的信息
    },
    // 下架商品
    downClick(row) {
      console.log(row);
    },
    init() {
      this.getlsit();
    },
    // 获取分页
    getpageing() {
      const { page } = this.$refs.pageing;
      return page;
    },
    // 获取列表
    async getlsit() {
      const page = this.getpageing();
      console.log("%c ======>>>>>>>>", "color:orange;", page);
      try {
        const obj = {
          pageNum: page.page,
          pageSize: page.limit,
        };
        const res = await this.$axios.getcommditylist({
          ...obj,
          ...this.srceen,
        });
        console.log("%c ======>>>>>>>>", "color:red;", res);
        if (res.code === 200) {
          console.log("%c ======>>>>>>>>", "color:orange;", res.data);
          this.tableData = res.data.list;
          this.tableData.forEach((el) => {
            el.price = "￥" + el.price;
          });
        }
      } catch (error) {
        console.log("%c ======>>>>>>>>", "color:orange;", error);
      }
    },
    // 搜索
    serch() {
      this.getlsit();
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  list-style: none;
}
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
</style>