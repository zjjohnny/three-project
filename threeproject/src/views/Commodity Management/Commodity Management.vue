<template>
  <div class="bigcontent">
    <!-- 头部 -->
    <div>
      <Inputteams></Inputteams>
    </div>
    <!--  -->
    <div class="content">
      <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
        <!-- 全部商品内容 -->
        <el-tab-pane label="全部商品" name="first">
          <Allproduct></Allproduct
        ></el-tab-pane>
        <el-tab-pane label="出售中的商品" name="second">
          <allproductseles></allproductseles>
        </el-tab-pane>
        <el-tab-pane label="仓库中的商品" name="third">
          <aproductbox></aproductbox
        ></el-tab-pane>
        <el-tab-pane label="商品回收" name="fourth"
          ><commodity-recycile></commodity-recycile>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>


<script>
import Inputteams from "@/components/Commodity Management/Commodity title.vue";
import AllproductVue from "@/components/Commodity Management/Allproduct.vue";
import Allproduct from "@/components/Commodity Management/Allproduct.vue";
import CommodityRecycile from "../../components/Commodity Management/Commodity recycile.vue";
import Allproductseles from "../../components/Commodity Management/Allproductseles.vue";
import Aproductbox from "../../components/Commodity Management/Aproductbox.vue";
export default {
  components: {
    Inputteams,
    AllproductVue,
    Allproduct,
    CommodityRecycile,
    Allproductseles,
    Aproductbox,
  },
  data() {
    return {
      activeName: "first", //默认激活项
    };
  },
  methods: {
    handleClick(tab, event) {},
  },
};
</script>

<style lang="scss" scoped>
.content {
  margin-top: 30px;
}
.bigcontent {
  width: 100%;
  min-width: 1200px;
}
</style>>
