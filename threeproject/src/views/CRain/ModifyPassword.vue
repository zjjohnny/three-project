<template>
  <div>
    <PersonalHeader :mpassword="true"></PersonalHeader>
    <div class="content-container">
      <div class="title-box">修改密码</div>
      <div class="container">
        <el-input
          placeholder="请输入旧密码"
          v-model="oldPassword"
          show-password
        ></el-input>
        <el-input
          placeholder="请输入新密码"
          v-model="newPassword"
          show-password
        ></el-input>
        <el-input
          placeholder="请再次确认新密码"
          v-model="newPassword1"
          show-password
        ></el-input>
        <span style="color: red" v-if="showTips">两次输入密码不一致</span>
        <div>新密码长度6-16位，数字、字符、字母至少包含两种</div>
        <button @click="savePassword">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
import PersonalHeader from "../../components/CRain/PersonalHeader";

export default {
  name: "ModifyPassword",
  data() {
    return {
      oldPassword: "",
      newPassword: "",
      newPassword1: "",
      showTips: false,
    };
  },
  methods: {
    savePassword() {
      console.log(this.oldPassword, this.newPassword, this.newPassword1);
      if (this.newPassword !== this.oldPassword1) {
        this.showTips = true;
      } else {
        this.showTips = false;
        this.oldPassword = "";
        this.newPassword = "";
        this.newPassword1 = "";
      }
    },
  },
  components: {
    PersonalHeader,
  },
};
</script>

<style scoped>
.content-container {
  padding: 10px;
  border: 1px solid #efefef;
  width: 870px;
  position: relative;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
}
.title-box {
  font-size: 36px;
  border-bottom: 1px solid #efefef;
  line-height: 90px;
  text-align: center;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 200px;
}
.container div {
  font-size: 14px;
  color: #333333;
  margin-top: 20px;
}
.container button {
  background-color: #43a6f9;
  color: white;
  border-radius: 5px;
  border: none;
  margin-top: 40px;
  padding: 10px 0;
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
}
</style>