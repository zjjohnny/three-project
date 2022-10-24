<template>
  <div class="conetent">
    <div>
      <h1>管理后台</h1>
      <div>
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          status-icon
          :rules="rules"
          label-width="120px"
          class="demo-ruleForm"
        >
          <el-form-item label="账号" prop="checkPass" class="formitem">
            <el-input v-model="ruleForm.checkPass" autocomplete="off" />
          </el-form-item>
          <el-form-item label="密码" prop="pass" class="formitem">
            <el-input
              v-model="ruleForm.pass"
              type="password"
              autocomplete="off"
            />
          </el-form-item>
          <!-- <el-form-item label="验证码" prop="age" class="formitem">
            <el-input v-model.number="ruleForm.age" />
          </el-form-item> -->
          <el-form-item class="formitem">
            <el-button
              class="formitembtn"
              type="primary"
              @click="submitForm(ruleFormRef)"
              >登录</el-button
            >
            <el-button class="formitembtn" @click="resetForm(ruleFormRef)"
              >重置</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onBeforeMount } from "vue";
import type { FormInstance } from "element-plus";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import axios from "@/node-server/axios";

// const DB = require("@/db/app.ts")
const router = useRouter(); //获取路由对象
const route = useRoute();
const store = useStore();
const ruleFormRef = ref<FormInstance>();
const validatePass = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请输入密码"));
  } else {
    if (ruleForm.checkPass !== "") {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField("checkPass", () => null);
    }
    callback();
  }
};
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请输入账号"));
  } else {
    callback();
  }
};

// const router = useRouter();

const ruleForm = reactive({
  pass: "",
  checkPass: "",
});
const rules = reactive({
  pass: [{ validator: validatePass, trigger: "blur" }],
  checkPass: [{ validator: validatePass2, trigger: "blur" }],
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      // 拿到vuex存取的userlist
      const userlist = store.state.userlist;
      // 判断账号密码是否正确并存当前登录信息在本地
      userlist.forEach((item: any) => {
        if (
          item.username == ruleForm.checkPass &&
          item.password == ruleForm.pass
        ) {
          localStorage.setItem("username", ruleForm.checkPass);

          localStorage.setItem("user", JSON.stringify(item));
          ElMessage.success("登录成功");
          router.push("/home");
        } 
      });

      // axios.post("/login", {
      //   username: ruleForm.checkPass,
      //   password: ruleForm.pass,
      // }).then((res) => {
      //   console.log(res);
      //   if (res.status == 200) {
      //     ElMessage.success("登录成功");
      //     router.push("/home");
      //   } else {
      //     ElMessage.error(res.data.msg);
      //   }
      // });
    }else {
          ElMessage.error("账号或密码错误");
        }
  });
};
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

onBeforeMount(() => {
  console.log("%c ======>>>>>>>>", "color:orange;", store.state.userlist);
  // 获取mysql中表userlist
  // localStorage.setItem("userlistacess", store.state.userlist);
});
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.conetent {
  margin: 0;
  padding: 0;
  background-color: rgba(25, 158, 216, 1);
  height: calc(100vh - 16px);
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    width: 757px;
    height: 430px;
    background: inherit;
    background-color: rgba(255, 255, 255, 1);
    border: none;
    border-radius: 5px;

    > h1 {
      display: flex;
      justify-content: center;
      font-size: 28px;
      color: #0066cc;
      margin: 50px auto;
    }

    > div {
      width: 500px;
      height: calc(55px * 3 + 30px);
      margin: auto 80px;
    }
  }
}
.formitem {
  margin-bottom: 30px;
}

.formitembtn {
  margin: 0 auto;
  width: 150px;
}
</style>