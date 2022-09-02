<template>
  <div>
    <div>
      <steptiame></steptiame>
    </div>
    <!-- 商品详情 -->
    <div>
      <div><i class="el-icon-s-claim"></i> <span>商品属性</span></div>
      <div>
        <!-- 分类 -->
        <div>
          <div><i class="el-icon-star-off"></i><span>商品分类</span></div>
          <div>
            商品分类修改类别 <el-button type="warning" plain>修改</el-button>
          </div>
        </div>
        <!-- 名称 -->
        <div>
          <div><i class="el-icon-star-off"></i><span>商品名称</span></div>
          <div>
            <el-input v-model="input" placeholder="请输入内容"></el-input
            ><span>产品名称长度4~60个字符，即2~30个汉字。</span>
          </div>
        </div>
        <!-- 简介 -->
        <div>
          <div><i class="el-icon-star-off"></i><span>商品简介</span></div>
          <div>
            <el-input
              type="textarea"
              placeholder="请输入内容"
              v-model="textarea"
              maxlength="40"
              show-word-limit
              rows="5"
            >
            </el-input>
            <span>产品名称长度4~80个字符，即2~40个汉字</span>
          </div>
        </div>
        <!-- 上传主图 -->
        <div>
          <div>
            <i class="el-icon-s-claim"></i> <span>上传主图</span
            ><span>建议您上传 750*750 像素以上的大图，支持jpg/png格式</span>
          </div>
          <div>放置图片部分</div>
        </div>
        <!-- 商品报价 -->
        <div>
          <div><i class="el-icon-s-claim"></i> <span>商品报价</span></div>
          <div> <el-input v-model="inputmoeny" placeholder="请输入内容"></el-input
            ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import steptiame from "@/components/Commodity Management/steptiame.vue";

export default {
  components: {
    steptiame,
  },
  data() {
    return {
      input: "", //商品名称搜索，
      textarea: "", //商品简介
      inputmoeny:"",//商品报价
      
    };
  },
};
</script>

<style>
</style>