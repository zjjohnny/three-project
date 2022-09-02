<template>
  <div class="content">
    <div class="title">
      <!-- 商品回复 -->
      <h1 @click="back"><i class="el-icon-back"></i>返回</h1>
      <h1>评论回复</h1>
    </div>
    <!-- 评论信息 -->
    <div>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>评论回复</span>
        </div>
        <div v-for="item in carddata" :key="item.id" class="text item">
          {{ item.name }}
        </div>
      </el-card>
    </div>
    <!-- 回复内容 -->
    <div>
      <h1>回复内容</h1>
      <div class="inputconte">
        <el-input
          type="textarea"
          placeholder="请输入内容"
          v-model="textarea"
          maxlength="200"
          show-word-limit
          rows="10"
        >
        </el-input>
      </div>
      <div class="btnarr">
        <el-button>取消</el-button>
        <el-button type="primary">回复</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carddata: [
        { id: 1, name: "评价人" },
        { id: 2, name: "平价商品" },
      ],
      textarea: "", //回复内容
    };
  },
  methods: {
    back() {
      this.$router.push("/Commdityreview");
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  font-size: 28px;
  border-bottom: 1px solid rgba(228, 228, 228, 1);
  > h1:first-child {
    color: rgb(67, 166, 249);
    // font-size: 18px;
  }
  > h1:last-child {
    margin: auto;
  }
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
  border-bottom: 1px solid #ebeef5;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
}

.btnarr {
  margin: 30px 40px;
  > button {
    margin: 0 10px;
  }
}
.content {
  margin: 0 10px;
  width: 100%;
  min-width: 1200px;
  > div {
    margin: 0 20px;
  }
}
</style>