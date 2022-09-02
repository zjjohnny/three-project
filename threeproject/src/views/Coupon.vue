<template>
    <div>
        <header>
            <el-row>
                <el-col :span="24"><div class="grid-content bg-purple-dark"><h1 class="tit">优惠券</h1></div></el-col>
            </el-row>
            <hr/>
        </header>
        <Jump></Jump>
        <couponDate></couponDate>
    </div>
  
  
</template>

<script>
    import Jump from '@/components/Jump.vue';
    import couponDate from '@/components/couponDate.vue'
export default {
  name: "Coupon",
  components: {
    Jump,
    couponDate
  },
  props: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {},
};
</script>
<style scoped>
    .tit{
        text-align: center;
        font-weight: 500;
    }
    .el-row {
        margin-bottom: 20px;
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: white;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
</style>