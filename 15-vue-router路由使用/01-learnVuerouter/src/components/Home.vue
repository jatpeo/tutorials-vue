<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容.....</p>
    <router-link to="/home/music">music</router-link>
    <router-link to="/home/article">article</router-link>
    <router-link :to="{
                path:'/home/profile/'+123,
                query:{name:'kobe',age:18}
                }"
    >profile
    </router-link>
<!--    针对路由来回切换时，组件频繁创建 销毁 可以使用 keep-alive 让页面保持活跃状态，
 exclude="Profile,User"  name->组件的name  多个，后面不能有空格
-->
    <keep-alive>
      <router-view />
    </keep-alive>


  </div>
</template>

<script>
  export default {
    name: "Home",
    created() {
      console.log('...created')   //界面创建出来
      document.title ='首页'
    },
    mounted() {
      console.log('...mounted')     //挂载到dom上时
    },
    updated() {
      console.log('...update')   //界面发生更新
    },
    destroyed() {  //销毁时
      console.log('...destroyed')
    },
    deactivated() {  //页面不活跃  该两函数是否执行与keep-alive有效
      console.log('...deactivated')
    },
    activated() {  //页面活跃
      console.log('...activated')


    }
  }
</script>

<style scoped>

</style>
