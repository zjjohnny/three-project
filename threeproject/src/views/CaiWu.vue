<template>
  <div class="home">
    
    <Hellocaiwu msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Hellocaiwu from '@/components/CaiWu.vue'

export default {
  name: 'CaiWu',
  components: {
    Hellocaiwu
  }
}
</script>
