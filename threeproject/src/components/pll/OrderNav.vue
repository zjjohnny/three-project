<template>
    <div>
        <ul class="orderNav">
            <li v-for="(item,i) in navList" :key="i" @click="activeChange(i)">
              <router-link :to="{ path: path, query:{state: i}}" 
              :class="i == nav_active ? 'nav_active' : ''" >{{item}}</router-link>
            </li>
            <!-- // <li>
            //   <router-link :to="{
            //     path: '/GoodsItem',
            //     query: {title:'待付款'}
            //   }" active-class="nav_active">待付款</router-link>
            // </li> -->
            
        </ul>
    </div>
</template>

<script>
export default{
    name: 'OrderNav',
    props: ['navList','nav_active','activeChange','path'],
    date(){
      return{
        
      }
    },
    methods:{
      
    }
}
</script>

<style scoped>
    ul{
        margin: 0 auto;
        width: 75%;
        padding: 0;
        height: 42px;
        display: flex;
        margin-bottom: 10px;
    }
    ul li{
        display: inline-block;
        list-style: none;
        background-color: #aad2fa;
    }
    ul li a{
        display: inline-block;
        color: white;
        text-decoration: none;
        height: 30px;
        width: 100px;
        line-height: 30px;
        text-align: center;
        padding: 5px 10px;
        border:1px solid #DCDFE6;
    }
    
</style>