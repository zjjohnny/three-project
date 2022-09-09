<template>
  <div class="reply-box-style">
    <!-- 遮罩层 -->
    <div
      class="show-reply-box"
      :style="{
        width: width + 'px',
        marginLeft: -width / 2 + 'px',
      }"
    >
      <!-- 模态框标题 -->
      <div class="reply-text" :style="{ backgroundColor: headerColor }">
        <span :style="{ color: headerTextColor }">{{ headerText }}</span>
      </div>
      <!-- 回复内容输入框 -->
      <div class="reply-box">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="请输入回复内容"
          v-model="textareaValue"
        ></textarea>
      </div>
      <!-- 底部按钮 -->
      <div
        class="footer-btn"
        v-if="btnGroupShow"
        :style="{ backgroundColor: headerColor }"
      >
        <button class="btn cancelBtn" @click="cancle">{{ cancelText }}</button>
        <button class="btn confirmBtn" @click="confirm">
          {{ confirmText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      textareaValue:''
    };
  },
  methods: {
    confirm() {
      if (this.textareaValue=='') return alert('回复内容不能为空!')
      this.$emit("confirm", this.textareaValue);
      this.textareaValue = '';
    },
    cancle() {
      this.$emit("close");
    },
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 500,
    },
    headerColor: {
      type: String,
      default: "#efefef",
    },
    headerText: {
      type: String,
      default: "模态框",
    },
    headerTextColor: {
      type: String,
      default: "#333",
    },
    btnGroupShow: {
      type: Boolean,
      default: false,
    },
    confirmText: {
      type: String,
      default: "确定",
    },
    cancelText: {
      type: String,
      default: "取消",
    },
  },
};
</script>

<style scoped>
/* 弹出回复消息模态框 */
/* 遮罩层 */
.reply-box-style {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.1);
}
.reply-box-style .show-reply-box {
  background-color: #fff;
  position: absolute;
  top: 50px;
  left: 50%;
}
.reply-box-style .show-reply-box .reply-text {
  padding: 10px;
}
.show-reply-box .reply-box textarea {
  width: 98%;
  height: 400px;
  border: none;
  padding: 5px;
}
.footer-btn {
  line-height: 10px;
  text-align: center;
  padding: 3px 0;
}
.footer-btn .btn {
  min-width: 80px;
  font-size: 13px;
  line-height: 34px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
}
.footer-btn .cancelBtn {
  background-color: #efefef;
  color: #333;
}
.footer-btn .confirmBtn {
  background-color: #1abc9c;
  color: #fff;
  margin-left: 10px;
}
</style>