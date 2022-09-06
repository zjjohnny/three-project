<template>
  <div class="title">
    <h1 > <slot name="h1titel">商品管理</slot></h1>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.title{
  font-size: 28px;
  color: #666666;
  text-align: center;
  border-bottom: 1px solid rgba(228, 228, 228, 1);
}
</style>