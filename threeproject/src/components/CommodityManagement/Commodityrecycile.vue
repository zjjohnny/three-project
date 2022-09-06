<template>
  <div>
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
          ><el-input v-model="inputid" placeholder="请输入内容"></el-input>
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
        <el-button type="info" @click="reset">重置</el-button>
      </div>
    </div>
    <div class="btnarr">
      <el-button type="primary" @click="backcangku">恢复到仓库</el-button>
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
          <template slot-scope="scope">
            <el-button
              @click="handleClick(scope.row.id)"
              type="text"
              size="small"
              >恢复到仓库</el-button
            ></template
          >
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="divadepage">
      <divadepage ref="pageing" @changPage="getlsit"></divadepage>
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
      inputid: "", //商品id查询
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
        editdata: "", //用来编辑商品装数据
        state: false,
        isDelete: true,
      },
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    reset() {
      this.srceen = {};
    },
    init() {
      this.getlsit();
    },
    // 恢复到仓库
    handleSelectionChange(val) {
      this.multipleSelection = val;
      // console.log("%c ======>>>>>>>>", "color:orange;", val); 多选框选择的列的数据
    },
    // 恢复到仓库

    getpageing() {
      const { page } = this.$refs.pageing;
      return page;
    },

    async getlsit() {
      const page = this.getpageing();
      try {
        const obj = {
          pageNum: page.page,
          pageSize: page.limit,
        };
        const res = await this.$axios.getcommditylist({
          ...obj,
          ...this.srceen,
        });
        if (res.code === 200) {
          page.total = res.data.total;
          this.tableData = res.data.list;
          this.tableData.forEach((el) => {
            el.price = "￥" + el.price;
          });
        }
      } catch (error) {
        console.log("%c ======>>>>>>>>", "color:orange;", error);
      }
    },
    serch() {
      this.getlsit();
    },

    // 恢复到仓库
    async backcanglu(id) {
      try {
        const ids = id
          ? [id]
          : this.multipleSelection.map((item) => {
              return item.id;
            });
        const obj = {
          ids,
        };
        const res = await this.$axios.backtocangku(ids);
        if (res.code === 200) {
          // 调用渲染表格函数
          this.getlsit();
          this.$message({
            type: "success",
            message: "恢复成功!",
          });
        }
      } catch (err) {
        alert(err);
      }
    },
    // 重置
    backcangku() {
      // 掉仓库的接口
      if (this.multipleSelection.length == 0) {
        alert("请选择要删除的数据");
      } else {
        //  掉恢复仓库的接口
        this.$confirm("下架的商品将会放到仓库中？", "确认信息", {
        distinguishCancelAndClose: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(() => {
          // 确定以后的回调函数
          this.backcanglu();
        })
      }
    },
    handleClick(id) {
      this.backcanglu(id);
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
  width: 100px !important;
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