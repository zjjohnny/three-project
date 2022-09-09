<template>
  <div>
    <PersonalHeader :opwd="true"></PersonalHeader>
    <div class="content-container">
      <div class="title-box">重置密码</div>
      <div class="container">
        <div class="tips-text">
          您正在对&nbsp;{{
            userInfo.userName
          }}&nbsp;账号进行修改手机操作，请谨慎操作
        </div>
        <span style="font-size: 14px; color: #333333"
          >点击获取验证码，短信将发送至安全手机&nbsp;{{ userPhone }}</span
        >
        <table>
          <tr>
            <td>登陆名：</td>
            <td>
              <input
                type="text"
                v-model="inputval"
                placeholder="手机/邮箱/会员名"
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
            <td v-if="showerr">
              <span style="font-size: 13px; color: red; margin-left: 20px"
                >*验证码输入错误</span
              >
            </td>
          </tr>
        </table>
        <span v-if="showerr1" style="font-size: 13px; color: red"
          >*登录名不能为空</span
        >
        <button class="save-btn" @click="goToNext">下一步</button>
        <div style="font-size: 14px; color: #333333">
          若无法验证，您可以联系管理员进行找回密码
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PersonalHeader from "../../components/CRain/PersonalHeader";
import { mapState } from "vuex";

export default {
  name: "RestPassword",
  data() {
    return {
      username: "CRain",
      inputval: "",
      newCode: "",
      showerr: false,
      showerr1: false,
      randCode: "",
    };
  },
  methods: {
    /* 获取验证码 */
    async getCode() {
      if(this.inputval == "") return alert('请输入用户名')
      const res = await this.$axios({
        method: "get",
        url: "http://42.192.152.16:8080/ssmTwo/getRandCode",
      });
      if (res.data.code !== 0) return;
      console.log(res.data.data);
      this.randCode = res.data.data;
    },
    goToNext() {
      if (this.inputval == "") return (this.showerr1 = true);
      this.showerr1 = false;
      if (this.newCode !== this.randCode || this.randCode == "")
        return (this.showerr = true);
      this.$router.push("/NewPassword");
    },
  },
  computed: {
    ...mapState("m_user", ["userInfo"]),
    userPhone() {
      const userPhone = this.$store.state.m_user.userInfo.userPhone;
      return userPhone;
      // return this.$store.getters["m_user/userPhone"];
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
  background-color: #f6f6f6;
  padding: 15px 20px;
  font-size: 14px;
  color: #333333;
  margin: 40px 50px 10px 0;
}
table {
  margin-top: 30px;
  color: #666666;
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