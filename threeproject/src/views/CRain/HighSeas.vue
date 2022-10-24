<template>
  <div class="content-container">
    <div class="header-text">用户列表(6共条)</div>
    <!-- 弹出框表格数据 -->
    <div class="data-box">
      <el-table :data="memberUserList" border style="width: 100%">
        <el-table-column
          type="index"
          label="排序"
          width="100"
          header-align="center"
          align="center"
        />
        <el-table-column
          prop="gradeName"
          label="等级名称"
          align:center
          width="100"
          header-align="center"
          align="center"
        />
        <el-table-column
          prop="upgradeRules"
          label="升级规则"
          width="150"
          header-align="center"
          align="center"
        />
        <el-table-column
          prop="amount"
          label="金额"
          width="150"
          header-align="center"
          align="center"
        />
        <el-table-column
          prop="cardNumber"
          label="卡位数量"
          header-align="center"
          align="center"
        />
        <el-table-column
          prop="cardMoney"
          label="卡位金额"
          width="150"
          header-align="center"
          align="center"
        />
        <el-table-column
          prop="backProportion"
          label="返佣比例"
          header-align="center"
          align="center"
        />
        <el-table-column
          prop="userSum"
          label="目前等级人数"
          header-align="center"
          align="center"
        />
        <el-table-column label="操作" header-align="center" align="center">
          <template #default="scope">
            <el-button
              link
              type="primary"
              size="small"
              @click="updateMemberList(scope.row)"
              >编辑</el-button
            >
            <el-dialog
              v-model="dialogVisible"
              title="编辑等级"
              width="30%"
              draggable
            >
              <table>
                <tr>
                  <td>*等级名称</td>
                  <td>
                    <input
                      type="text"
                      readonly
                      v-model="updateData.gradeName"
                    />
                  </td>
                </tr>
                <tr>
                  <td>*升级规则</td>
                  <td>{{ updateData.upgradeRules }}</td>
                </tr>
                <tr>
                  <td>*金额</td>
                  <td><input type="text" v-model="updateData.amount" /></td>
                  <td>元</td>
                </tr>
                <tr>
                  <td>*卡位数量</td>
                  <td><input type="text" v-model="updateData.cardNumber" /></td>
                </tr>
                <tr>
                  <td>*卡位金额</td>
                  <td><input type="text" v-model="updateData.cardMoney" /></td>
                  <td>元</td>
                </tr>
                <tr>
                  <td>*返佣比例</td>
                  <td>
                    <input type="text" v-model="updateData.backProportion" />
                  </td>
                </tr>
              </table>
              <template #footer>
                <span class="dialog-footer">
                  <el-button @click="dialogVisible = false">取消</el-button>
                  <el-button type="primary" @click="submitUpdate"
                    >确定</el-button
                  >
                </span>
              </template>
            </el-dialog>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { computed, defineComponent, onBeforeMount, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import axios from "../../plugins/axiosInstance";

export default defineComponent({
  name: "HighSeas",
  setup() {
    //获取路由对象
    const router = useRouter();
    //获取store对象
    const store = useStore();
    //编辑对话框
    const dialogVisible = ref(false);
    //编辑对话框数据
    let updateData = reactive({});
    //方法
    /* 编辑按钮 */
    const updateMemberList = function (row) {
      updateData.id = row.id;
      updateData.gradeName = row.gradeName;
      updateData.amount = row.amount;
      updateData.backProportion = row.backProportion;
      updateData.cardMoney = row.cardMoney;
      updateData.cardNumber = row.cardNumber;
      updateData.upgradeRules = row.upgradeRules;
      updateData.userSum = row.userSum;
      console.log(updateData);
      dialogVisible.value = true;
    };
    //弹出框确定按钮
    const submitUpdate = function () {
      store.dispatch("updateMemberGradeList", updateData);
      dialogVisible.value = false;
    };
    /* 获取会员等级列表 */
    const getMemberList = function () {
      axios.get("/MemberGrade.do").then((res) => {
        store.dispatch("saveMemberGradeList", res.data.memberGradeList);
        console.log(res.data.memberGradeList);
      });
    };
    /*  store获取会员等级列表 */
    const memberUserList = computed(() => store.state.memberGradeList);
    onBeforeMount(() => {
      getMemberList();
    });
    return {
      memberUserList,
      dialogVisible,
      updateData,
      updateMemberList,
      submitUpdate,
    };
  },
});
</script>

<style scoped>
.content-container {
  background-color: white;
  /* padding: 20px; */
}
.header-text {
  text-align: start;
  padding-bottom: 10px;
  color: #333333;
  border-bottom: 1px solid #efefef;
  padding-bottom: 20px;
}
.data-box {
  margin-top: 20px;
  font-size: 12px;
  color: #666666;
}
.data-box table tr {
  height: 40px;
}
.data-box input {
  margin-left: 10px;
  border: 1px solid #efefef;
  border-radius: 3px;
  height: 20px;
  padding: 5px;
}
</style>