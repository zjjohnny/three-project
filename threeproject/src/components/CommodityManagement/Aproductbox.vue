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
        <el-button type="info" @click="reset">重置</el-button>
      </div>
    </div>
    <!-- 发布删除 下架功能 -->
    <div class="btnarr">
      <el-button type="primary" @click="launch">发布商品</el-button>
      <div>
        <el-button @click="delet">批量删除</el-button>
        <el-button @click="downproduct">批量上架</el-button>
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
        <el-table-column prop="goodsName" label="商品名称" width="160">
        </el-table-column>
        <el-table-column prop="image" label="商品图片" width="160" >
          <template slot-scope="scope">
            <el-popover placement="top-start" title="" trigger="hover">
              <img
                :src="scope.row.image"
                alt=""
                style="width: 150px; height: 150px"
              />
              <img
                slot="reference"
                :src="scope.row.image"
                style="width: 90px; height: 60px"
              />
            </el-popover>
          </template>
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
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >编辑商品</el-button
            >
            <el-button @click="downClick(scope.row.id)" type="text" size="small"
              >立即上架</el-button
            >
            <el-button
              @click="deletClick(scope.row.id)"
              type="text"
              size="small"
              >删除商品</el-button
            ></template
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
        isDelete: false,
        goodsName: "",
        id: "",
        category: "",
        bigPrice: "",
        smallPrice: "",
        bigSales: "",
        smallSales: "",
        state: false, //表示下架
        editdata: "", //用来编辑商品装数据
      },
    };
  },
  mounted() {
    // console.log("%c ======>>>>>>>>", "color:orange;", 11111);
    this.init();
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
      // console.log("%c ======>>>>>>>>", "color:orange;", val); 多选框选择的列的数据
    },
    // 发布商品
    launch() {
      this.$router.push("/Commoditylaunch");
    },
    // 编辑商品
    handleClick(row) {
      // 要跳转路由
      this.$router.push({
        path: "/Commoditylaunch",
        query: {
          rowId: row.id,
          isEdit: true,
        },
      });

      this.editdata = row;
    },
    // 下架商品
    downClick(id) {
      // 确定以后的回调函数

      // 确定以后的回调函数
      this.downproducts(id);
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
            el.image = "http://42.192.152.16:8080/" + "imageUpload/" + el.image;
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

    //
    reset() {
      this.srceen = {};
    },

    // 批量上架接口
    async downproducts(id) {
      try {
        const ids = id
          ? [id]
          : this.multipleSelection.map((item) => {
              return item.id;
            });
        // const obj = {
        //   ids,
        // };
        const res = await this.$axios.updatagoods(ids);
        if (res.code === 200) {
          this.getlsit();
          //  把下架的后的数据vuex传给仓库中的商品
          this.$message({
            type: "success",
            message: "上架成功!",
          });
        }
      } catch (err) {
        alert(err);
      }
    },
    // 批量上架
    downproduct() {
      if (this.multipleSelection.length == 0) {
        alert("请选择要上架的数据");
      } else {
        this.$confirm("上架的商品将会出售，您确定上架吗？", "确认信息", {
          distinguishCancelAndClose: true,
          confirmButtonText: "确定",
          cancelButtonText: "取消",
        }).then(() => {
          // 确定以后的回调函数
          this.downproducts();
        });
      }
    },

    async getdelet(id) {
      try {
        const ids = id
          ? [id]
          : this.multipleSelection.map((item) => {
              return item.id;
            });
        const obj = {
          ids,
        };
        const res = await this.$axios.getdeletprodcut(ids);
        if (res.code === 200) {
          // 调用渲染表格函数
          this.getlsit();
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        }
      } catch (err) {
        alert(err);
      }
    },

    delet() {
      if (this.multipleSelection.length == 0) {
        alert("请选择要删除的数据");
      } else {
        this.$confirm("该商品会移入回收站中", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }).then(() => {
          // 这里写后端传过来数据的删除接口
          this.getdelet();
        });
      }
    },
    deletClick(id) {
      // 这里写后端传过来数据的删除接口
      this.getdelet(id);
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

.tableteam {
  margin: 30px 80px;
}
.divadepage {
  margin: 30px 80px;
  display: flex;
  justify-content: end;
}
</style>