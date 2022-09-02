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
  </div>
</template>

<script>
import Inputteams from "@/components/Commodity Management/Commodity title.vue";
export default {
  name: "setptiame",
  components: { Inputteams },
  data() {
    return {
      active: 1,
    };
  },
  methods: {
    next() {
      console.log("%c ======>>>>>>>>", "color:orange;", this.active);
      if (this.active++ > 2) this.active = 0;
    },
  },
};
</script>

<style>
</style>