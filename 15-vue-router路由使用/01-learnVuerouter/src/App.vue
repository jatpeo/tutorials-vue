<template>
  <div id="app">

    <router-link to="/home" tag="div" replace active-class="active" class="home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <br><br><br>
<!--    演示路由跳转方式二  $router-->
    <button @click="goHome">home</button>
    <button @click="goAbout">about</button>
    <br><br><br>
<!--    演示动态路由-->
    <router-link to="/user/1">user1</router-link>
    <router-link to="/user/2">user1</router-link>

    <router-view/>
  </div>
</template>

<script>

  export default {
    name: 'App',
    methods:{
      goHome(){
        //this.$router.push('/home') //可以返回
        this.$router.replace('/home') //不可以返回
      },
      goAbout(){
       // this.$router.push('/about')
        this.$router.replace('/about')
      }
    }
  }
</script>

<style>
  /** vue默认选中样式
  */
  .router-link-active{
    color: #f00;
  }
  /**
   支持自定义class 可以替换默认名称router-link-active
   */
  .active{
    color: darkorchid;
  }
  .home{
    width: 300px;
    height: 300px;
    background-color: #ff6666;
  }
</style>
