<template>
  <div id="app">
    <!-- <Coupon></Coupon> -->
    <!-- <mallCoupon></mallCoupon> -->
    <commodityCoupon></commodityCoupon>
  </div>
</template>

<script>
  import Coupon from '@/views/Coupon.vue';
  import mallCoupon from '@/views/mallCoupon.vue';
  import commodityCoupon from '@/views/commodityCoupon.vue';
  export default {
    name: "App",
    components:{
      // Coupon,
      // mallCoupon,
      commodityCoupon
    }
  };
  </script>
<style scoped>

</style>