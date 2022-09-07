<template>
  <div>
    <PersonalHeader :opwd="true"></PersonalHeader>
    <div class="content-container">
      <div>请输入您需要找回的登陆账号密码的账号名</div>
      <div class="content">
        <table>
          <tr>
            <td>登录名：</td>
            <td class="second-column">
              <input
                type="text"
                placeholder="手机/邮箱/会员名"
                v-model="value"
              />
            </td>
            <td>
              <span
                v-if="showerr"
                style="font-size: 13px; color: red; margin-left: 20px"
                >*该用户不存在</span
              >
              <span
                v-if="shownull"
                style="font-size: 13px; color: red; margin-left: 20px"
                >*输入不能为空</span
              >
            </td>
          </tr>
          <tr>
            <td></td>
            <td><button @click="goToNext">下一步</button></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import PersonalHeader from "../../components/CRain/PersonalHeader";
export default {
  name: "RetrievePassword",
  data() {
    return {
      value: "",
      showerr: false,
      shownull: false,
    };
  },
  methods: {
    /* 点击下一步 */
    async goToNext() {
      if (this.value == "") return (this.shownull = true);
      const res = await this.$axios({
        method: "get",
        url: "http://42.192.152.16:8080/ssmTwo/queryUserByUserIdOrPhoneOrEmail",
        params: {
          idPhoneE: this.value,
        },
      });
      if (res.status !== 200 || res.data.code !== 0) return (this.showerr = true);
      this.$router.push("/RestPassword");
    },
  },
  components: {
    PersonalHeader,
  },
};
</script>

<style scoped>
.content-container {
  padding: 30px 50px;
  font-size: 20px;
  color: #666666;
  width: 650px;
  border: 1px solid #efefef;
  position: relative;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
}
.content {
  padding: 50px 70px;
  text-align: center;
}
.content table .second-column {
  width: 300px;
}
.content table input {
  border: 1px solid #efefef;
  border-radius: 5px;
  padding: 15px 20px;
  width: 260px;
}
.content table button {
  background-color: #43a6f9;
  color: white;
  border-radius: 5px;
  border: none;
  margin-top: 20px;
  padding: 10px 0;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  width: 100%;
}
</style>