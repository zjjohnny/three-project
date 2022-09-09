<template>
  <div>
    <PersonalHeader :mphone="true"></PersonalHeader>
    <div v-if="showSuccess" class="showSuccess">修改成功</div>
    <div class="content-container">
      <div class="title-box">修改手机</div>
      <div class="container">
        <div class="tips-text">
          您正在对&nbsp;{{
            userInfo.userName
          }}&nbsp;账号进行修改手机操作，请谨慎操作
        </div>
        <table>
          <tr>
            <td>新手机：</td>
            <td>
              <input
                type="text"
                v-model="newPhone"
                placeholder="请输入新的手机号码"
                maxlength="11"
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
            <td>
              <span
                v-if="showerr"
                style="font-size: 13px; color: red; margin-left: 20px"
                >*验证码输入错误</span
              >
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
import { mapState } from "vuex";
export default {
  name: "ModifyPhone",
  data() {
    return {
      newPhone: "",
      newCode: "",
      randCode: "",
      showerr: false,
      showSuccess: false,
    };
  },
  methods: {
    /* 获取验证码 */
    async getCode() {
      if (this.newPhone == "") return alert("请输入手机号码");
      /* 手机号码正则表达式 */
      const pattern = /0?(13|14|15|17|18|19)[0-9]{9}/;
      if (!pattern.test(this.newPhone)) return alert("手机号码不正确");
      if (this.newPhone == this.userInfo.userPhone)
        return alert("新手机号码与原手机号码相同");
      const res = await this.$axios({
        method: "get",
        url: "http://42.192.152.16:8080/ssmTwo/getRandCode",
      });
      console.log(res.data.data);
      this.randCode = res.data.data;
    },
    /* 保存 */
    async saveModify() {
      if (this.newCode == "") return alert("请输入验证码");
      if (this.newCode !== this.randCode) return (this.showerr = true);
      const res = await this.$axios({
        method: "post",
        url: "http://42.192.152.16:8080/ssmTwo/updatePhone",
        params: {
          userPhone: this.newCode,
          userId: this.userInfo.userId,
          userPhone: this.newPhone,
        },
      });
      console.log(res);
      if (res.data.code !== 0) return alert("电话号码修改失败");
      /* 修改成功，跳转到安全设置页 */
      this.showSuccess = true;
      setTimeout(() => {
        this.showSuccess = false;
        this.$router.push("/SecuritySetting");
      }, 1000);
    },
  },
  computed: {
    ...mapState("m_user", ["userInfo"]),
  },
  components: {
    PersonalHeader,
  },
};
</script>

<style scoped>
.showSuccess {
  padding: 10px 60px;
  color: white;
  font-weight: bold;
  background-color: black;
  border-radius: 5px;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
}
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