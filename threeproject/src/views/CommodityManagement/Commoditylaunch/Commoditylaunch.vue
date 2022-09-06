<template>
  <div>
    <!-- 进度条 -->
    <div>
      <steptiame ref="asss"></steptiame>
    </div>
    <!-- 选择商品分类 -->
    <div v-show="active === 1" v-if="this.active == 1">
      <div class="selectpart">
        <span
          >您已选：<span>{{ this.selectlist[0] }}</span
          >><span>{{ this.selectlist[1] }}</span
          >><span>{{ this.selectlist[2] }}</span></span
        >
      </div>
      <!-- 穿梭框 -->
      <div class="treepart">
        <el-cascader-panel
          class="treepartitem"
          :options="options"
          @change="handleChange"
        ></el-cascader-panel>
      </div>
    </div>
    <!-- 填写商品详情 -->
    <div>
      <commodity-details
        v-show="active === 2"
        @editdata="editdata"
        :active="active"
        ref="details"
        :selectlist="selectlist"
        @editcateger="editcateger"
      ></commodity-details>
    </div>
    <commodity-susscess v-show="active === 3"> </commodity-susscess>

    <div class="btn" v-if="ishow">
      <el-button type="success" @click="btns">下一步</el-button>
    </div>
  </div>
</template>


<script>
import steptiame from "@/components/CommodityManagement/steptiame.vue";
import CommodityDetails from "./Commoditydetails.vue";
import CommoditySusscess from "./Commoditysusscess.vue";
import { mapState } from "vuex";
export default {
  name: "CommodityLaunch",
  components: {
    steptiame,
    CommodityDetails,
    CommoditySusscess,
  },
  data() {
    return {
      options: [
        {
          value: "家居饰品",
          label: "家居饰品",
          children: [
            {
              value: "流水挂件",
              label: "流水挂件",
            },
            {
              value: "花瓶仿真",
              label: "花瓶仿真",
            },
            {
              value: "工艺饰品",
              label: "工艺饰品",
            },
          ],
        },
        {
          value: "时令水果",
          label: "时令水果",
          children: [
            {
              value: "瓜果",
              label: "瓜果类",
            },
            {
              value: "柑橘类",
              label: "柑橘类",
            },
            {
              value: "坚果类",
              label: "坚果类",
            },
          ],
        },
        {
          value: "电子商品",
          label: "电子商品",
          children: [
            {
              value: "手表",
              label: "手表",
            },
            {
              value: "摄影机",
              label: "摄影机",
            },
          ],
        },
        {
          value: "服装",
          label: "服装",
          children: [
            {
              value: "男装",
              label: "男装",
              children: [
                {
                  value: "T恤",
                  label: "T恤",
                },
                {
                  value: "皮鞋",
                  label: "皮鞋",
                },
              ],
            },
            {
              value: "女装",
              label: "女装",
              children: [
                {
                  value: "裙子",
                  label: "裙子",
                },
                {
                  value: "高跟鞋",
                  label: "高跟鞋",
                },
              ],
            },
          ],
        },
      ],
      active: 1,
      ishow: true,
      editlist: "",
      selectlist: "",
    };
  },

  computed: {
    ...mapState(["roleeidttData"]),
  },

  methods: {
    // 编辑种类
    editcateger() {
      const dom = this.$refs.asss;
      dom.active = dom.active - 1;
      this.active = dom.active;
      console.log("%c ======>>>>>>>>", "color:orange;", this.selectlist);
      // 要将数据回显给穿梭框
    },

    handleChange(value) {
      // console.log("%c ======>>>>>>>>", "color:red;", value); //获取选中的树形的
      this.selectlist = value;

      // 要传给第二步骤
    },
    // 编辑时里面的值
    editdata(data) {
      console.log("%c ======>>>>>>>>", "color:orange;", data);
      data = this.editlist;
    },
    // 编辑路由跳转传参
    btns() {
      const data = this.$route.query;
      console.log("%c ======>>>>>>>>", "color:blue;", this.active);
      if(this.active==3){
        this.ishow = false;
      }
      if (this.active === 2) {
        // details当前输入框的值
        const details = this.$refs.details.$data;
        // console.log("%c ======>>>>>>>>", "color:red;", details); 拿到的是details里面的数据
        const objedit = {
          category: this.selectlist[1],
          goodsName: details.input,
          id: data.rowId,
          price: details.inputmoeny,
          remarks: details.textarea,
        };
        if (data && data.isEdit === "true") {
          console.log("%c ======>>>>>>>>", "color:orange;", objedit);
          this.editproducts(objedit);
        } else {
          // 调用新建的接口
          // 新建要做正则
          if (objedit.goodsName === "") {
            alert("请输入名称!");
          } else if (objedit.price === "") {
            alert("请输入价格");
          } else if (objedit.category === "") {
            alert("请选择商品分类");
          } else {
            console.log("%c ======>>>>>>>>", "color:orange;", this.active);
            this.addproducts(objedit);
          }
        }
        return false;
      }

      const dom = this.$refs.asss;
      dom.active = dom.active + 1;
      this.active = dom.active;
    },

    // 编辑的接口
    async editproducts(obj) {
      try {
        const res = await this.$axios.editproduct(obj);
        if (res.code === 200) {
          this.ishow=false
          // 要将修改后的list返回给tablelist从新渲染表格
          console.log("%c ======>>>>>>>>", "color:orange;", res);
          const dom = this.$refs.asss;
          dom.active = dom.active + 1;
          this.active = dom.active;
          // 需调用列表接口
          
        }
      } catch (error) {
        alert(error);
      }
    },

    // 新增接口
    async addproducts(obj) {
      try {
        //
        const res = await this.$axios.addproudct(obj);
        if (res.code === 200) {
          this.ishow=false
          const dom = this.$refs.asss;
          dom.active = dom.active + 1;
          this.active = dom.active;
          this.$message({
            message: "新增成功",
            type: "success",
          });
          // this.getaprtmentslist();
        }
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.treepart {
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.selectpart {
  height: 40px;
  background-color: #f2f2f2;
  margin: 30px 10px;
  display: flex;
  align-items: center;
  > span:first-child {
    padding-left: 30px;
  }
}

.btn {
  display: flex;
  justify-content: center;
  margin: 30px 0;
  // width: 120px;
  > button {
    width: 130px;
  }
}
.treepartitem {
  margin: 0 auto;
}
</style>