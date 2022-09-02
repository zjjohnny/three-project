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
              <input type="text" placeholder="手机/邮箱/会员名" />
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
  methods: {
    goToNext(){
        console.log('goToNext');
    }
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
  padding: 50px 100px;
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