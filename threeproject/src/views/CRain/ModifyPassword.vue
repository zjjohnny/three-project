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
          @blur="checkOldPassword"
        ></el-input>
        <span v-if="showErr" style="font-size: 13px; color: red"
          >*请输入旧密码</span
        >
        <span v-if="showErr1" style="font-size: 13px; color: red"
          >*旧密码错误</span
        >
        <el-input
          placeholder="请输入新密码"
          v-model="newPassword"
          show-password
          @blur="checkNewPassword"
        ></el-input>
        <span style="font-size: 13px; color: red" v-if="showErr2"
          >*请按照正确格式输入密码</span
        >
        <el-input
          placeholder="请再次确认新密码"
          v-model="newPassword1"
          show-password
        ></el-input>
        <span style="font-size: 13px; color: red" v-if="showTips"
          >*密码输入不一致</span
        >
        <div>新密码长度6-16位，数字、字符、字母至少包含两种</div>
        <button @click="savePassword">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
import PersonalHeader from "../../components/CRain/PersonalHeader";
import { mapState } from "vuex";
export default {
  name: "ModifyPassword",
  data() {
    return {
      oldPassword: "",
      newPassword: "",
      newPassword1: "",
      showTips: false,
      showErr: false,
      showErr1: false,
      showErr2: false,
    };
  },
  methods: {
    /* 旧密码框验证 */
    checkOldPassword() {
      this.showErr1 = false;
      if (this.oldPassword == "") return (this.showErr = true);
      this.showErr = false;
      if (this.oldPassword !== this.userInfo.userPassword)
        return (this.showErr1 = true);
      this.showErr1 = false;
    },
    /* 核对新密码是否规范 */
    checkNewPassword() {
      /* 新密码框1为空 */
      if (this.newPassword == "") return (this.showErr2 = true);
      this.showErr2 = false;
      /* 判断长度是否正确 */
      if (this.newPassword.length < 6 || this.newPassword.length > 16)
        return (this.showErr2 = true);
      this.showErr2 = false;
      /* 正则表达式：判断输入的密码格式是否正确 */
      //必须包含数字和字母，可以有特殊字符
      const p1 = /^(?=.*\d)(?=.*[a-zA-Z]).{6,16}$/;
      //必须包含特殊字符和字母，可以有数字
      const p2 =
        /^(?=.*[`~!@#$%^&*()_\-+=<>?:"|,./;'·~！@#￥%……&*（）——\-+=|《》？：“”、；‘'，。、]+)(?=.*[a-zA-Z]).{6,16}$/;
      //必须包含特殊字符和数字，可以有字母
      const p3 =
        /^(?=.*[`~!@#$%^&*()_\-+=<>?:"|,./;'·~！@#￥%……&*（）——\-+=|《》？：“”、；‘'，。、]+)(?=.*\d).{6,16}$/;
      if (
        p1.test(this.newPassword) ||
        p2.test(this.newPassword) ||
        p3.test(this.newPassword)
      )
        return (this.showErr2 = false);
      this.showErr2 = true;
    },
    /* 点击确定按钮 */
    async savePassword() {
      console.log(this.oldPassword, this.newPassword, this.newPassword1);
      /* 判断三个密码框是否为空 */
      if (
        this.newPassword == "" ||
        this.newPassword1 == "" ||
        this.oldPassword == ""
      )
        return alert("请输入密码");
      /* 判断两个新密码框是相等 */
      if (this.newPassword !== this.newPassword1) return (this.showTips = true);
      this.showTips = false;
      if (this.showTips || this.showErr || this.showErr1 || this.showErr2)
        return alert("请检查操作是否正确");
      const res = await this.$axios({
        method: "post",
        url: "http://42.192.152.16:8080/ssmTwo/updatePwd",
        params: {
          newPwd: this.newPassword1,
          oldPwd: this.oldPassword,
          userId: this.userInfo.userId,
        },
      });
      if (res.data.code !== 0) return alert("密码修改失败");
      console.log("密码修改成功");
      //密码修改成功后跳转到首页
      // this.$router.push('/')
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