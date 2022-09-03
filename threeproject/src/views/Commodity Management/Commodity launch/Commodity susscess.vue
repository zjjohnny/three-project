<template>
  <div>
    <!-- 项目发表成功 -->
    <div class="langchsucess">
      <span><i class="iconfont icon-success"></i>恭喜你，商品发布成功！</span>
    </div>
    <div class="btn">
      <el-button type="success" @click="backcommdity">返回商品管理</el-button>
    </div>
  </div>
</template>

<script>
import "@/assets/font/iconfont.css";
export default {
  components: {

  },
  methods: {
    backcommdity() {
      this.$router.push("/Comoditymangement");
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
.langchsucess {
  display: flex;
  justify-content: center;
  margin: 30px 0;
  font-size: 22px;
  color: #333333;
  i {
    font-size: 38px;
    padding-right: 10px;
    color: green;
  }
}
</style>