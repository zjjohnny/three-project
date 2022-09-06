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
          <span>商品编号</span
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
        <el-button type="success" @click="serch">搜索</el-button>
        <el-button type="info" @click="reset">重置</el-button>
      </div>
    </div>
    <!-- 表格部分 -->
    <div class="tableteam">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="comment" label="评价内容" width="180">
        </el-table-column>
        <el-table-column prop="goodsName" label="被评商品" width="180">
        </el-table-column>
        <el-table-column prop="evaluate" label="评价类型"> </el-table-column>
        <el-table-column prop="userName" label="评价人"> </el-table-column>
        <el-table-column prop="oderNo" label="订单编号"> </el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button
              @click="handleClick(scope.row.id)"
              type="text"
              size="small"
              :disabled="scope.row.replyState" 
              >{{ scope.row.replyState ? '已回复':replycontnt }}</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="divadepage">
      <divadepageVue ref="pageing" @changPage="getcongtentlist"></divadepageVue>
    </div>
  </div>
</template>


<script>
import Inputteams from "@/components/CommodityManagement/Commoditytitle.vue";
import divadepageVue from "@/components/CommodityManagement/divadepage.vue";
export default {
  components: {
    Inputteams,
    divadepageVue,
  },
  data() {
    return {
      input: "", //商品名称查询
      inputid: "", //商品id查询
      valueselct: "", //商品分类的数据option
      options: [
        {
          value: "好评",
          label: "好评",
        },

        {
          value: "差评",
          label: "差评",
        },
      ],
      tableData: [],
      replycontnt: "回复",
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.getcongtentlist();
    },

    handleClick(row) {
      console.log("%c ======>>>>>>>>", "color:orange;", row);
      this.$router.push({
        path: "/Commodityreviewcontent",
        query: {
          id: row,
        },
      });
    },
    reset() {
      this.input = "";
      this.inputid = "";
      this.valueselct = "";
    },
    // 搜索
    serch() {
      console.log("%c ======>>>>>>>>", "color:orange;", this.valueselct);
      this.getcongtentlist();
    },
    // 获取分页
    getpageing() {
      const { page } = this.$refs.pageing;
      return page;
    },

    //列表接口
    async getcongtentlist() {
      const page = this.getpageing();
      try {
        const obj = {
          pageNum: page.page,
          pageSize: page.limit,
          goodsName: this.input,
          oderNo: this.inputid,
          evaluate: this.valueselct,
          // 传搜索框的数据
        };
        //
        const res = await this.$axios.getreviewlist(obj);
        if (res.code === 200) {
          page.total = res.data.total;
          this.tableData = res.data.list;
        }
      } catch (error) {
        console.log("%c ======>>>>>>>>", "color:orange;", error);
      }
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