<template>
  <div>
    <PersonalHeader :newpwd="true"></PersonalHeader>
    <div class="content-container">
      <div class="title-box">设置新密码</div>
      <div class="container">
        <div class="tips-text">请重设您的账号密码</div>
        <table>
          <tr>
            <td>
              <el-input
                placeholder="请输入新密码"
                v-model="newpassword"
                show-password 
                style="width: 420px;margin-bottom:20px;"
              ></el-input>
            </td>
          </tr>
          <tr>
            <td>
              <el-input
                placeholder="请再次确认新密码"
                v-model="newpassword1"
                show-password 
                style="margin-bottom: 10px;"
              ></el-input>
            </td>
          </tr>
        </table>
        <div style="font-size: 14px; color: #333333">
          密码长度6-16位，数字，字符，字母至少包含两种
        </div>
        <button class="save-btn" @click="saveModify">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
import PersonalHeader from "../../components/CRain/PersonalHeader";

export default {
  name: "NewPassword",
  data() {
    return {
      newpassword: "",
      newpassword1: "",
    };
  },
  methods: {
    saveModify() {
      console.log("保存新密码");
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
  width: 700px;
  position: relative;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
}
.container {
  padding: 50px 100px;
}
.title-box {
  font-size: 36px;
  border-bottom: 1px solid #efefef;
  line-height: 90px;
  text-align: center;
}
.tips-text {
  font-size: 20px;
  color: #333333;
}
table {
  margin-top: 30px;
  color: #666666;
}
table tr td {
  font-size: 20px;
}
table tr td button {
  padding: 15px;
  background-color: #fff;
  color: #43a9fa;
  border: 1px solid #43a9fa;
  border-radius: 5px;
  margin-left: 20px;
  font-weight: bold;
  cursor: pointer;
}
.save-btn {
  background-color: #43a6f9;
  color: white;
  border-radius: 5px;
  border: none;
  margin: 40px 0;
  padding: 10px 200px;
  cursor: pointer;
}
.el-input--suffix .el-input__inner {
  width: 420px;
  margin-bottom: 20px;
}
</style>