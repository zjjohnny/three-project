<template>
  <div class="content">
    <div class="title">
      <!-- 商品回复 -->
      <h1 @click="putoff"><i class="el-icon-back"></i>返回</h1>
      <h1>修改商城联系人信息</h1>
    </div>
    <div class="titletext">
      <span> 您正在对商城联系人信息进行修改操作，请谨慎操作</span>
    </div>
    <div class="inputitem">
      <div>
        <span>联系人姓名：</span
        ><el-input v-model="name" placeholder="请输入内容"></el-input>
      </div>
      <div class="phonte">
        <span>新手机:</span
        ><el-input v-model="phone" placeholder="请输入内容" class="inputa"></el-input>
        <el-button type="primary" plain>获取验证码</el-button>
      </div>
      <div>
        <span>验证码:</span
        ><el-input v-model="phoenuber" placeholder="请输入内容"></el-input>
      </div>
      <div>
        <span>联系邮箱:</span
        ><el-input v-model="email" placeholder="请输入内容"></el-input>
      </div>
    </div>
    <div class="btnitem">
      <el-button type="primary" @click="submit">保存</el-button>
      <div>
        <span>* 若遇到问题可以联系管理员帮助您解决问题</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      phoenuber: "",
      email: "",
    };
  },
  methods: {
    submit() {},
    putoff(){
      this.$router.push({
        path: "/",
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.content {
  // margin: 0 10px;
  width: 100%;
  min-width: 1200px;
  > div {
    margin: 0 20px;
  }
}
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
.titletext {
  // width: 600px;
  width: 1120px;
  height: 60px;
  line-height: 60px;
  text-align: left;
  background: inherit;
  background-color: rgba(246, 246, 246, 1);
  > span {
    padding-left: 20px;
  }
}

.inputitem {
  > div {
    width: 1120px;
    margin: 10px 0;
    display: flex;
    > span {
      width: 120px;
      text-align: right;
      padding-right: 10px;
    }
  }
}
.inputa{
  width: calc(100% - 120px);
  margin-right: 10px;
}

.btnitem{
  width: 1120px;

  // margin: 30px auto;
  > button {
    width: 300px;
    margin: 30px auto;
    display: flex;
    justify-content: center;
  }
  > div {
    margin: 0 10px;
    > span {
      color: rgb(255, 102, 0);
      font-size: 14px;
    }
  }
}
</style>