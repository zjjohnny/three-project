<template>
  <div>
    <div class="content-container">
      <div class="title-box">
        <div class="ch-box">后台管理系统</div>
        <div>Technology management system</div>
      </div>
      <!-- 登录框部分 -->
      <div class="login-box">
        <!-- 头部 -->
        <div class="herder-box">
          <div class="head-portrait">
            <img src="../../assets/images/headerPic.png" />
          </div>
          <div class="system-box">
            <div class="ch">后台管理系统</div>
            <div class="en">Technology management system</div>
          </div>
        </div>
        <!-- 输入框 -->
        <div class="input-box">
          <div class="account-password-box">
            <img src="../../assets/images/accountPic.png" />
            <input
              style="width: 100%"
              type="text"
              placeholder="请输入账号"
              v-model="account"
            />
          </div>
          <div class="account-password-box">
            <img src="../../assets/images/passwordPic.png" />
            <input
              style="width: 100%"
              type="password"
              placeholder="请输入密码"
              v-model="password"
            />
          </div>
        </div>
        <!-- 用户名或密码输入错误 -->
        <div class="err-box" v-if="showerr">
          账号或密码输入错误，请确认后再试！
        </div>
        <!-- 勾选框+忘记密码 -->
        <div class="check-box">
          <div><input type="checkbox" />记住密码</div>
          <div @click="goToRetrievePassword">忘记密码？</div>
          <!-- <router-link to="RetrievePassword">
            <div>忘记密码？</div>
          </router-link> -->
        </div>
        <!-- 登录按钮 -->
        <div class="login-btn">
          <button @click="UserLogin">登陆</button>
        </div>
      </div>
      <!-- 底部文字 -->
      <div class="footer-text-box">
        <div>科技推动进步</div>
        <div class="last-box">后台管理方便快捷</div>
      </div>
      <img src="../../assets/images/loginBgcPic.png" />
    </div>
    <!-- <img :src="`http://42.192.152.16:8080/ssmTwo/image/1.png`" /> -->
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      account: "",
      password: "",
      showerr: false,
      headeer: "",
    };
  },
  methods: {
    ...mapActions("m_user", ["updateToken", "saveUserInfo"]),
    /* 点击登录 */
    async UserLogin() {
      const res = await this.$axios({
        method: "post",
        url: "http://42.192.152.16:8080/ssmTwo/checkLogin",
        params: {
          userId: this.account,
          userPassword: this.password,
        },
      });
      // console.log(res.data.data.user);
      if (res.data.code !== 0) return (this.showerr = true);
      /* 将用户token存储到store和本地 */
      this.updateToken(res.data.data.token);
      /* 将用户信息存储到store */
      this.saveUserInfo(res.data.data.user);
    },
    /* 点击忘记密码 */
    goToRetrievePassword() {
      this.$router.push("/RetrievePassword");
    },
  },
  computed: {},
  mounted() {},
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
img {
  width: 100%;
  height: 100%;
}
.content-container {
  position: relative;
}
.title-box {
  position: absolute;
  top: 36px;
  left: 290px;
  color: #fff;
}
.ch-box {
  font-size: 44px;
  margin-bottom: 10px;
}
.login-box {
  padding: 30px;
  position: absolute;
  background-color: #fff;
  top: 50%;
  left: 50%;
  margin-left: -180px;
  margin-top: -201px;
  border-radius: 20px;
}
.herder-box {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 40px;
}
.head-portrait {
  height: 50px;
  width: 50px;
  margin-right: 30px;
}
.head-portrait img {
  border-radius: 25px;
}
.herder-box .system-box {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 18px;
}
.herder-box .system-box .en {
  margin-top: 5px;
  font-size: 14px;
}
.account-password-box {
  padding: 5px 10px;
  display: flex;
  align-items: center;
  border: 1px solid #efefef;
  border-radius: 10px;
  margin-bottom: 20px;
}
.account-password-box img {
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-right: 20px;
}
.account-password-box input {
  border: none;
  padding: 3px 5px;
  line-height: 34px;
}
.check-box {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  font-size: 14px;
  color: #333333;
  padding: 0 20px;
  cursor: pointer;
}
.check-box input {
  margin-right: 5px;
}
.login-btn {
  margin-top: 30px;
}
.login-btn button {
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  line-height: 50px;
  background-color: #3aaaf4;
  border: none;
  cursor: pointer;
  border-radius: 20px;
}
.footer-text-box {
  position: absolute;
  bottom: 120px;
  left: 380px;
  font-size: 24px;
  color: #fff;
  font-weight: bold;
}
.footer-text-box .last-box {
  margin-top: 20px;
  margin-left: 85px;
}
.err-box {
  font-size: 13px;
  color: red;
}
</style>