<template>
  <div class="content">
    <div class="title">
      <!-- 商品回复 -->
      <h1 @click="putoff"><i class="el-icon-back"></i>返回</h1>
      <h1>评论回复</h1>
    </div>
    <!-- 评论信息 -->
    <div>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>评论回复</span>
        </div>
        <div v-for="item in carddata" :key="item.id" class="text item">
          {{ item.name }} : {{ item.content }}
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
        <el-button @click="putoff">取消</el-button>
        <el-button type="primary" @click="back">回复</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { stringify } from 'qs';

export default {
  data() {
    return {
      carddata: [
        { id: 1, name: "评价人", content: "" },
        { id: 2, name: "平价商品", content: "" },
      ],
      textarea: "", //回复内容
      idss: "",
      isback: false,
    };
  },
  mounted() {
    const data = this.$route.query;
    const ids = Number(data.id);
    this.editproductsshow(ids);
  },
  methods: {
    back() {
      // 调用回复的接口
      this.callback();
    },
    putoff() {
      // 清空内容
      this.textarea = "";
      this.carddata = [];
      this.$router.push("/Commdityreview");
    },

    // 编辑回显
    async editproductsshow(ids) {
      try {
        const obj = {
          id: ids,
        };
        const res = await this.$axios.showconetent(obj);
        if (res.code === 200) {
          this.carddata[0].content = res.data.userName;
          this.carddata[1].content = res.data.goodsName;
          this.idss = res.data.id;
        }
      } catch (error) {
        console.log("%c ======>>>>>>>>", "color:orange;", error);
      }
    },

    // 回复接口
    async callback() {
      try {
        const idsss = Number(this.idss);
        const reviewobj = {
          id: idsss,
          reply: this.textarea,
        };
        const reback=JSON.stringify(reviewobj)
        console.log('%c ======>>>>>>>>','color:orange;',reback)
        const res = await this.$axios.reviewback(reback);
        if (res.code === 200) {
          this.isback = true;
          this.$message({
            type: "success",
            message: "回复成功!",
          });
          this.backmessge();
        }

        //
      } catch (error) {
        console.log("%c ======>>>>>>>>", "color:orange;", error);
      }
    },
    backmessge() {
      // 跳转路由传参
      this.$router.push({
        path: "/Commdityreview",
        query: {
          isback: this.isback,
        },
      });
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