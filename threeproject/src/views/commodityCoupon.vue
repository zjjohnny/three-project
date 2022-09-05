<template>
  <div>
    <header>
            <el-row>

                <el-col :span="24"><div class="grid-content bg-purple-dark"><h1 class="tit">创建商品优惠券</h1></div></el-col>
            </el-row>
            <hr/>
        </header>
        <activityOne></activityOne>
  </div>
</template>

<script>
    import activityOne from '@/components/activityOne.vue';
export default {
  name: "commodityCoupon",
  components: {
    activityOne
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
</style>