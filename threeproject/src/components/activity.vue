<template>
  <div>
    <el-row>
        <el-col :span="2" class="oneTitle">活动设置</el-col>
    </el-row>
    <el-row>
        <el-col :span="3">活动名称：</el-col>
        <el-col :span="4"><el-input v-model="input1" placeholder="请输入内容 必填" ></el-input></el-col>
    </el-row>
    <el-row>
        <el-col :span="3">活动有效期：</el-col>
        <el-col :span="4"><el-input v-model="input2"></el-input></el-col>
        <el-col :span="1" style="text-align: center;">至</el-col>
        <el-col :span="4"><el-input v-model="input3"></el-input></el-col>
    </el-row>
    <el-row>
        <el-col :span="2" class="oneTitle">优惠券设置</el-col>
    </el-row>
    <el-row>
        <el-col :span="3">推广渠道：</el-col>
        <el-col :span="4" style="text-align: left;"><el-radio v-model="radio1" label="1">全网自动推广</el-radio></el-col>
        <el-col :span="4" style="text-align: left;"><el-radio v-model="radio1" label="2">自有渠道推广</el-radio></el-col>
    </el-row>
    <el-row>
        <el-col :span="3">优惠券名称：</el-col>
        <el-col :span="6"><el-input v-model="input4" placeholder="最多支持十个字" ></el-input></el-col>
    </el-row>
    <el-row>
        <el-col :span="3">优惠金额：</el-col>
        <el-col :span="6"><el-input v-model="input5" placeholder="必须是大于0的整数" ></el-input></el-col>
    </el-row>
    <el-row>
        <el-col :span="3">使用门槛：</el-col>
        <el-col :span="4" style="text-align: left;"><el-radio v-model="radio2" label="1">不限制</el-radio></el-col>
        <el-col :span="6" style="text-align: left;"><el-radio v-model="radio2" label="2">满<el-input v-model="input6" style="width: 100px;margin: 0 10px;"></el-input>可使用</el-radio></el-col>
    </el-row>
    <el-row>
        <el-col :span="3">发行总量：</el-col>
        <el-col :span="6"><el-input v-model="input7" placeholder="必须是大于0的整数" ></el-input></el-col>
    </el-row>
    <el-row>
        <el-col :span="3">每人限领：</el-col>
        <el-col :span="6" style="text-align: left;">
            <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :span="24"></el-option>
            </el-select>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="3">生效日期：</el-col>
        <el-col :span="6" style="text-align: left;"><el-radio v-model="radio3" label="1">固定日期</el-radio></el-col>
        <el-col :span="6" style="text-align: left;"><el-radio v-model="radio3" label="2">固定日期</el-radio></el-col>
        <el-col :span="6" style="text-align: left;"><el-radio v-model="radio3" label="3">固定日期</el-radio></el-col>
        
    </el-row>
    <el-row>
            <el-col :span="3" style="visibility:hidden;">1</el-col>
            <el-col :span="2" style="text-align: left;">生效时间</el-col>
            <el-col :span="4"><el-input  v-model="input8"></el-input></el-col>
            <el-col :span="6" style="text-align: left;"><el-radio v-model="radio4" label="1">领到券当日开始<el-input  v-model="input9" style="width: 100px;"></el-input>天内有效</el-radio></el-col>
            <el-col :span="6" style="text-align: left;"><el-radio v-model="radio5" label="1">领到券当日开始5天内有效</el-radio></el-col>
    </el-row>
    <el-row>
            <el-col :span="3" style="visibility:hidden;">1</el-col>
            <el-col :span="2" style="text-align: left;">过期时间</el-col>
            <el-col :span="4"><el-input  v-model="input10"></el-input></el-col>
            <el-col :span="6" style="text-align: left;"><el-radio v-model="radio4" label="2">领到券次日开始5天内有效</el-radio></el-col>
            <el-col :span="6" style="text-align: left;"><el-radio v-model="radio5" label="2">领到券次日开始<el-input  v-model="input11" style="width: 100px;"></el-input>天内有效</el-radio></el-col>
    </el-row>
    <el-row>
            <el-col :span="3" style="visibility:hidden;">1</el-col>
            <el-col :span="6" style="text-align: left;"><el-radio v-model="radio6" label="1">领到券当日开始5天内有效</el-radio></el-col>
    </el-row>
    <el-row>
            <el-col :span="3" style="visibility:hidden;">1</el-col>
            <el-col :span="6" style="text-align: left;"><el-radio v-model="radio6" label="2">领到券次日开始5天内有效</el-radio></el-col>
    </el-row>
    <el-row>
            <el-col :span="3">到期提醒：</el-col>
            <el-col :span="6" style="text-align: left;"><el-radio v-model="radio7" label="1">到期前3天提醒</el-radio></el-col>
    </el-row>
    <el-row>
            <el-col :span="3">使用说明：</el-col>
            <el-col :span="6" style="text-align: left;"><el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="textarea"></el-input></el-col>
    </el-row>
    <el-row>
        <el-col :span="3" style="visibility:hidden;">1</el-col>
        <el-button type="primary">提交</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "activity",
  components: {},
  props: {},
  data() {
    return {
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        input7: '',
        input8: '',
        input9: '',
        input10: '',
        input11: '',

        radio1: '',
        radio2: '',
        radio3: '',
        radio4: '',
        radio5: '',
        radio6: '',
        radio7: '',

        textarea: '',

        options: [{
          value: '选项1',
          label: '不限张'
        }, {
          value: '选项2',
          label: '1张'
        }, {
          value: '选项3',
          label: '2张'
        }, {
          value: '选项4',
          label: '3张'
        }, {
          value: '选项5',
          label: '4张'
        },{
            value: '选项6',
            label: '5张'
        },{
            value: '选项7',
            label: '10张'
        }],
        value: ''
    };
  },
  watch: {},
  computed: {},
  methods: {},
};
</script>
<style scoped>
    .el-row{
        margin: 10px 100px;
    }
    .el-col{
        line-height: 40px;
        text-align: right;
    }
    .oneTitle{
        text-align: left;
        font-size: 14px;
        border-left: 3px solid #3399ff;
        height: 30px;
        line-height: 30px;
        padding-left: 5px;
    }
    .el-radio{
        text-align: left;
    }
</style>