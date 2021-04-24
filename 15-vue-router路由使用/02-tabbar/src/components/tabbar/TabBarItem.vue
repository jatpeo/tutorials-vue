<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"> <slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>

<!--    <div :class="{active:isActive}"><slot name="item-text"></slot></div>-->
    <div :style="activeStyle "><slot name="item-text"></slot></div>

  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'rec'
      }
    },
    data(){
      return {
        //isActive:true

      }
    },
    methods:{
      itemClick(){
        console.log("itemclick...");
        this.$router.replace(this.path)
      }
    },
    computed:{
      isActive(){
        //home ->item1(/home) =>true
        //cart ->item2(/cart) =>false
        return this.$route.path.indexOf(this.path) !==-1
      },
      activeStyle(){
        return this.isActive ? {color:this.activeColor}:{}
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    /*tabbar 文字和图片的位置*/
    vertical-align: middle;
    margin-bottom: 2px;

  }
  /*.active{*/
  /*  color: red;*/
  /*}*/
</style>
