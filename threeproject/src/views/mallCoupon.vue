<template>
  <div>
        <header>
            <el-row>
                <el-col :span="24"><div class="grid-content bg-purple-dark"><h1 class="tit">创建商城优惠券</h1></div></el-col>
            </el-row>
            <hr/>
        </header>
        <activity></activity>
  </div>
</template>

<script>
    import activity from '@/components/activity.vue';
export default {
  name: "mallCoupon",
  components: {
    activity
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