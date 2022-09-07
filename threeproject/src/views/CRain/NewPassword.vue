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
                style="width: 420px; margin-bottom: 20px"
                @blur="checkType"
              ></el-input>
            </td>
            <td>
              <span
                v-if="showerr1"
                style="font-size: 13px; color: red; margin-left: 20px"
                >*请按照格式输入</span
              >
            </td>
          </tr>
          <tr>
            <td>
              <el-input
                placeholder="请再次确认新密码"
                maxlength="16"
                v-model="newpassword1"
                show-password
                style="margin-bottom: 10px"
              ></el-input>
            </td>
            <td>
              <span
                v-if="showerr"
                style="font-size: 13px; color: red; margin-left: 20px"
                >*密码输入不一致</span
              >
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
      showerr: false,
      showerr1: false,
      isGo: false,
    };
  },
  methods: {
    /* 输入框变化,判断输入的密码格式是否正确 */
    checkType() {
      /* 判断输入框是否为空，长度是否正确 */
      if (
        this.newpassword == "" ||
        this.newpassword.length < 6 ||
        this.newpassword.length > 16
      )return (this.showerr1 = true);
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
        p1.test(this.newpassword) ||
        p2.test(this.newpassword) ||
        p3.test(this.newpassword)
      ) {
        this.showerr1 = false;
        this.isGo = true;
      }else return this.showerr1 = true;
    },

    /* 点击确定按钮 */
    async saveModify() {
      /* 第一个密码框是否正确 */
      if(!this.isGo) return this.showerr1 = true;
      /* 判断两次密码输入是否相同 */
      if (this.newpassword !== this.newpassword1) return (this.showerr = true);
      /* 密码不为空 */ 
      const res = await this.$axios({
        method: "post",
        url: "http://42.192.152.16:8080/ssmTwo/forgotPwd",
        params: {
          userId: 1360084900,
          userPassword:this.newpassword1
        },
      });
      if(res.status !== 200 || res.data.code !== 0) return alert('密码修改失败，请稍后再试');
      //密码修改成功后再这里跳转到首页
      // this.$router.push('/')
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
  padding: 50px 60px;
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