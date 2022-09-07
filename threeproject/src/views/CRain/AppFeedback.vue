<template>
  <div>
    <Modal
      v-show="showMessage"
      :width="600"
      headerColor="#efefef"
      headerText="回复"
      headerTextColor="#333"
      :btnGroupShow="true"
      confirmText="确定"
      cancelText="取消"
      @confirm="modalConfirm"
      @close="modalClose"
    ></Modal>
    <div class="header-title">APP反馈</div>
    <div class="content-container">
      <!-- 搜索栏 -->
      <div class="search-box">
        <!-- 搜索框 -->
        <table>
          <tr>
            <td>搜索：</td>
            <td>
              <el-input
                placeholder="请输入关键字，回车搜索"
                prefix-icon="el-icon-search"
                v-model="input1"
              >
              </el-input>
            </td>
            <!-- 系统 -->
            <td>
              <el-select v-model="systemValue" placeholder="所有系统">
                <el-option
                  v-for="item in allSystem"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </td>
            <!-- 状态 -->
            <td>
              <el-select v-model="statusValue" placeholder="全部状态">
                <el-option
                  v-for="item in allStatus"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </td>
            <!-- 时间 -->
            <td>
              <el-select v-model="timeValue" placeholder="全部时间">
                <el-option
                  v-for="item in allTime"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </td>
          </tr>
        </table>
        <!-- 操作栏 -->
        <div class="opera-box">
          <table>
            <tr>
              <td><input type="checkbox" />全选</td>
              <td><i class="el-icon-edit"></i>批量回复</td>
              <td><i class="el-icon-delete" color="#c00000"></i>批量删除</td>
            </tr>
          </table>
        </div>
      </div>
      <!-- 评论区 -->
      <div class="comment-area">
        <!-- 每一条用户评论和反馈 -->
        <div
          class="comment-content-box"
          v-for="(item, index) in feedBackList"
          :key="index"
        >
          <!-- 发表评论 -->
          <div class="pub-info">
            <!-- 用户信息 -->
            <div class="user-info">
              <div class="checkbox">
                <input type="checkbox" />
              </div>
              <!-- 用户头像和昵称 -->
              <div class="header-nickname">
                <!-- 头像 -->
                <img src="../../assets/images/headerPic.png" />
                <!-- 昵称 -->
                <span>{{ item.store.storeName }}</span>
              </div>
              <!-- 时间 -->
              <div class="time-box">
                <span>{{ item.store.createTime }}</span>
                <span>14:00</span>
              </div>
              <!-- 手机和APP版本 -->
              <div class="app-type">
                <span>APP版本{{ item.store.appVersion }}</span>
              </div>
              <div class="phone">
                <span>{{ item.store.phoneType }}</span>
              </div>
            </div>
            <p class="clearboth"></p>
            <!-- 反馈内容 -->
            <div class="pub-content-box">
              <!-- 建议类别 -->
              <div class="proposal-box">[功能建议]</div>
              <!-- 建议内容 -->
              <div class="proposal-content">
                <!-- 为什么不能在app上抽奖，打开app的时候，希望首页能够多做点运营方面的活动，给我们广大顾客朋友多发点优惠券，希望贵司能够采纳，谢谢哈！阿斯顿发送到发士大夫士大夫撒旦法撒旦法撒旦法撒旦法撒旦 -->
                {{ item.comment }}
              </div>
            </div>
            <p class="clearboth"></p>
            <!-- 回复图标和按钮 -->
            <div class="reply-box" @click="replyContent(item.sugId)">
              <i class="el-icon-chat-dot-round"></i>
              <span>回复</span>
            </div>
          </div>
          <!-- 回复评论 -->
          <div
            class="reply-content-box"
            v-for="(item1, index) in item.replies"
            :key="index"
          >
            <!-- 工作人员信息 -->
            <div class="opera-info">
              <!-- 头像和昵称 -->
              <div class="opera-header-nickname">
                <!-- 头像 -->
                <img src="../../assets/images/headerPic.png" />
                <!-- 昵称 -->
                <span>{{ item1.user.userName }}</span>
              </div>
              <!-- 回复时间 -->
              <div class="reply-time">
                <span>2021-12-01</span>&nbsp;&nbsp;
                <span>14:00</span>
              </div>
              <!-- <p class="clearboth"></p> -->
            </div>
            <p class="clearboth"></p>
            <!-- 回复内容 -->
            <div class="reply-content">
              <!-- 感谢您的建议，我们会讨论这个功能点，有您的建议相信我们会做的更好 -->
              {{ item1.replyComment }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "../../components/CRain/Modal.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: { Modal },
  name: "AppFeedback",
  data() {
    return {
      input1: "",
      allSystem: [
        {
          value: "选项1",
          label: "所有系统",
        },
        {
          value: "选项2",
          label: "IOS系统",
        },
        {
          value: "选项3",
          label: "安卓系统",
        },
      ],
      systemValue: "",
      allStatus: [
        {
          value: "选项1",
          label: "全部状态",
        },
        {
          value: "选项2",
          label: "已回复",
        },
        {
          value: "选项3",
          label: "未回复",
        },
      ],
      statusValue: "",
      allTime: [
        {
          value: "选项1",
          label: "全部时间",
        },
        {
          value: "选项2",
          label: "最久24小时",
        },
        {
          value: "选项3",
          label: "最近一个月",
        },
        {
          value: "选项4",
          label: "最近3个月",
        },
        {
          value: "选项5",
          label: "最近1年",
        },
      ],
      timeValue: "",
      showMessage: false,
    };
  },
  methods: {
    ...mapActions("m_feedback", ["saveUserFeedBack"]),

    /* 获取用户反馈 */
    async getUserFeedback() {
      const res = await this.$axios({
        method: "get",
        url: "http://132.232.110.185/ssmTwo/querySuggestAll",
      });
      if (res.data.code !== 0) return;
      /* 将用户反馈存入store */
      this.saveUserFeedBack(res.data.data);
      console.log(this.feedBackList);
    },
    /* 回复按钮 */
    replyContent(sugId) {
      console.log("回复用户反馈",sugId);
      this.showMessage = true;
    },
    /* 模态框确定按钮 */
    modalConfirm(value) {
      console.log("点击了确定按钮", value);
      this.showMessage = false;
    },
    /* 模态框取消按钮 */
    modalClose() {
      console.log("点击了取消按钮");
      this.showMessage = false;
    },
  },
  computed: {
    /* 从store中获取用户反馈列表 */
    // ...mapState('m_feedback', ['feedBackList'])
    feedBackList() {
      return this.$store.state.m_feedback.feedBackList;
    },
  },
  mounted() {
    this.getUserFeedback();
  },
  components: {
    Modal,
  },
};
</script>

<style scoped>
.header-title {
  line-height: 80px;
  font-size: 28px;
  border-bottom: 1px solid #efefef;
  text-align: center;
  color: #666666;
}
.search-box {
  font-size: 18px;
  color: #333333;
}
.content-container {
  padding: 40px 20px;
}
.opera-box {
  padding-left: 10px;
  background-color: #f9f9f9;
  line-height: 35px;
  border: 1px solid #d7d7d7;
  border-radius: 5px;
  margin: 10px 0;
}
.opera-box table {
  font-size: 16px;
  color: #333333;
}
.opera-box table td {
  cursor: pointer;
}
.opera-box table i {
  margin-left: 20px;
}
.comment-content-box {
  padding: 20px;
  border: 1px solid #efefef;
}
.comment-content-box .pub-info {
  border-bottom: 1px solid #efefef;
  padding-bottom: 10px;
}
.comment-content-box .pub-info .user-info {
  text-align: center;
  height: 60px;
}
.user-info .checkbox {
  padding: 0 20px;
  line-height: 60px;
}
.user-info .header-nickname {
  display: flex;
  align-items: center;
  color: #333333;
}
.user-info .header-nickname img {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
}
.user-info .time-box {
  margin-left: 50px;
  color: #999;
  line-height: 50px;
}
.user-info .time-box span {
  margin-left: 20px;
}
.checkbox,
.header-nickname,
.time-box {
  float: left;
}
.phone,
.app-type {
  float: right;
  color: #999;
}
.phone {
  line-height: 50px;
}
.app-type {
  line-height: 60px;
  margin-left: 20px;
}
.clearboth {
  clear: both;
}
.pub-content-box {
  padding: 0 100px 0 110px;
  color: #333333;
  display: flex;
  align-items: center;
}
.pub-content-box .proposal-box {
  margin-right: 10px;
  white-space: nowrap;
}
.pub-content-box .proposal-content {
  margin-left: 20px;
}
.reply-box {
  padding-left: 110px;
  color: #1296db;
  size: 18px;
  cursor: pointer;
}
.reply-box span {
  margin-left: 5px;
}
.reply-content-box {
  padding-left: 110px;
  margin-top: 20px;
}
.opera-header-nickname,
.reply-time {
  float: left;
}
.opera-header-nickname {
  display: flex;
  align-items: center;
  color: #333333;
}
.opera-header-nickname img {
  width: 30px;
  height: 30px;
  border-radius: 15px;
}
.opera-header-nickname span {
  margin-left: 10px;
}
.opera-info .reply-time {
  margin-left: 50px;
  color: #999999;
  line-height: 30px;
}
.reply-content-box .reply-content {
  margin-top: 30px;
  padding-left: 40px;
  color: #333333;
}
</style>