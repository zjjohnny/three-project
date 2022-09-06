<template>
  <div>
    <div>
      <Inputteams><span slot="h1titel">选择商品分类</span></Inputteams>
    </div>
    <el-steps :active="active">
      <el-step title="选择商品分类" icon="el-icon-edit"> </el-step>
      <el-step title="填写商品详情" icon="el-icon-upload"></el-step>
      <el-step title="商品发布成功" icon="el-icon-picture"></el-step>
    </el-steps>
    <!-- <commodity-launch ref="sel" v-show="active === 1"></commodity-launch> -->
    <!-- <div class="btn">
      <el-button type="success" @click="btn(active)">下一步</el-button>
    </div> -->
  </div>
</template>

<script>
import Inputteams from "@/components/CommodityManagement/Commoditytitle.vue";
import CommodityLaunch from "../../views/CommodityManagement/Commoditylaunch/Commoditylaunch.vue";
export default {
  name: "setptiame",
  components: { Inputteams, CommodityLaunch },
  data() {
    return {
      active: 1,
      ishow: false,
    };
  },
  methods: {
    next() {
      console.log("%c ======>>>>>>>>", "color:orange;", this.active);
      if (this.active++ > 2) this.active = 0;
    },
    btn(as) {
      if (as === 1) {
        console.log("%c ======>>>>>>>>", "color:orange;", this.$refs.sel);
        setTimeout(() => {
          this.active = 2;
        }, 2000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  justify-content: center;
  // width: 120px;
  > button {
    width: 130px;
  }
}
</style>