<template>
  <div class="home">
   
    <CaiWushouye msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CaiWushouye from '@/components/CaiWushouye.vue'

export default {
  name: 'HomeView',
  components: {
    CaiWushouye
  }
}
</script>
