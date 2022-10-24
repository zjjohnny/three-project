<template>
  <div>
    <div class="content-container">
      <!-- 头像框 -->
      <div class="header-box">
        点击上传头像
        <!-- <img src="" alt="" /> -->
      </div>
      <!-- 添加的数据 -->
      <div>
        <table>
          <tr>
            <td>用户名</td>
            <td><input type="text" v-model="userInfo.userName" /></td>
            <td>*手机号码</td>
            <td><input type="text" v-model="userInfo.userPhone" /></td>
          </tr>
          <tr>
            <td>*账户密码</td>
            <td><input type="text" v-model="userInfo.userPwd" /></td>
            <td>*会员等级</td>
            <td><input type="text" v-model="userInfo.grade" /></td>
          </tr>
          <tr>
            <td colspan="4" class="select-group">
              选择分组
              <!-- <input type="checkbox" @change="getSelect('一组')" />一组
              <input type="checkbox" @change="getSelect('二组')" />二组
              <input type="checkbox" @change="getSelect('三组')" />三组 -->
              <el-radio-group
                v-model="userGroup"
                class="ml-4"
                @change="getSelect"
              >
                <el-radio label="一组" size="large">一组</el-radio>
                <el-radio label="二组" size="large">二组</el-radio>
                <el-radio label="三组" size="large">三组</el-radio>
              </el-radio-group>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <!-- 按钮 -->
    <div class="btn-box">
      <button @click="addUser">提交</button>
      <button @click="backPre">返回</button>
    </div>
  </div>
</template>

<script>
import { reactive, ref, onBeforeMount, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { nanoid } from "nanoid";
import { ElMessage } from "element-plus";
export default {
  name: "AddUser",
  setup() {
    //获取路由对象
    const router = useRouter();
    //获取store对象
    const store = useStore();
    const userGroup = ref("1");
    //用户信息
    const userInfo = reactive({
      userId: nanoid(),
      userHeaderImg: "user1.png",
      userName: "",
      userReCode: "8FDS4",
      grade: "",
      userPwd: "",
      userPhone: "",
      group: "",
      superReCode: "SDF1C",
      userStatus: true,
      LastLoginTime: "2019.01.01-10:00",
      registerTime: "2019.01.01-10:00",
    });

    //方法
    /* 获取用户分组 */
    const getSelect = function () {
      userInfo.group = userGroup.value;
    };
    /* 提交按钮 */
    const addUser = function () {
      store.dispatch("addMemberUser", userInfo);
      ElMessage({
        message: "添加成功",
        type: "success",
      });
      setTimeout(() => {
        router.push("/client");
      }, 3000);
    };
    /* 返回按钮 */
    const backPre = function () {
      router.push("/client");
    };
    /* 清空对象 */
    const clearUserInfo = function () {
      (userInfo.userName = ""),
        (userInfo.grade = ""),
        (userInfo.userPwd = ""),
        (userInfo.userPhone = ""),
        (userInfo.group = "");
    };
    onBeforeMount(function () {});
    onMounted(() => {
      //初始化页面
      clearUserInfo();
    });
    return {
      userInfo,
      userGroup,
      addUser,
      backPre,
      getSelect,
    };
  },
};
</script>

<style scoped>
.content-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 12px;
  color: #666666;
  padding: 20px 0 0 50px;
  border-bottom: 1px solid #ebebeb;
}
.content-container .header-box {
  width: 100px;
  height: 100px;
  color: #333333;
  line-height: 100px;
  border-radius: 50px;
  text-align: center;
  margin-right: 30px;
  background-color: #f5f5f9;
}
.content-container tr {
  line-height: 40px;
}
.content-container table input {
  border: 1px solid #e4e4e4;
  border-radius: 3px;
  margin: 0 50px 0 10px;
  padding: 5px;
}
.content-container table tr .select-group input {
  margin: 0 0 0 16px;
}
.btn-box {
  margin-top: 20px;
  padding-left: 180px;
}
.btn-box button {
  cursor: pointer;
  padding: 5px 20px;
  background-color: #f3f3f3;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  margin-right: 20px;
}
</style>