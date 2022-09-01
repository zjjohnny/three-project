<template>
  <div>
    <PersonalHeader :modify="true"></PersonalHeader>
    <div class="content-container">
      <div class="title-box">修改手机</div>
      <div class="container">
        <div class="tips-text">
          您正在对{{ username }}账号进行修改手机操作，请谨慎操作
        </div>
        <table>
          <tr>
            <td>新手机：</td>
            <td>
              <input
                type="text"
                v-model="newPhone"
                placeholder="请输入新的手机号码"
              />
            </td>
            <td>
              <button @click="getCode">获取验证码</button>
            </td>
          </tr>
          <tr>
            <td>验证码：</td>
            <td>
              <input type="text" v-model="newCode" placeholder="请输入验证码" />
            </td>
          </tr>
        </table>
        <button class="save-btn" @click="saveModify">保存</button>
        <div style="font-size: 14px; color: #333333">
          若无法验证，您可以联系管理员进行找回密码
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PersonalHeader from "../../components/CRain/PersonalHeader";

export default {
  name: "ModifyPhone",
  data() {
    return {
      username: "CRain",
      newPhone: "",
      newCode: "",
    };
  },
  methods: {
    /* 获取验证码 */
    getCode(){
        console.log('getCode');
    },
    /* 保存 */
    saveModify(){
        console.log('saveModify');
    }
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
  margin-top: 10px;
  transform: translateX(50%);
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
  background-color: #f6f6f6;
  padding: 15px 20px;
  font-size: 14px;
  color: #333333;
  margin: 40px 50px 50px 0;
}
table tr input {
  border: 1px solid #efefef;
  border-radius: 5px;
  padding: 15px 20px;
  width: 240px;
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
  /* line-height: 35px; */
  margin: 20px 0;
  padding: 10px 200px;
  cursor: pointer;
}
</style>