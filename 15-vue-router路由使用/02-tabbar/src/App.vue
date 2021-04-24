<template>
  <div id="app">
    <!--      显示-->
    <router-view> </router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import mainTabBar from './components/mainTabBar'

  export default {
    name: 'App',
    components:{
      mainTabBar
    }

  }
</script>

<style>
  /*直接引用全局样式 推荐此方法比直接在main.js中使用好require('../src/assets/css/base.css');//导入css base*/
  @import "assets/css/base.css";

</style>
