<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
      <template #item-icon>
        <img src="../assets/img/home.svg">
      </template>
      <template #item-icon-active>
        <img src="../assets/img/home_active.svg">
      </template>
      <template #item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/category" activeColor="red">
      <template #item-icon>
        <img src="../assets/img/category.svg">
      </template>
      <template #item-icon-active>
        <img src="../assets/img/category_active.svg">
      </template>
      <template #item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path="cart" activeColor="green">
      <template #item-icon>
        <img src="../assets/img/shopcart.svg">
      </template>
      <template #item-icon-active>
        <img src="../assets/img/shopcart_active.svg">
      </template>
      <template #item-text>
        <div>购物</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path="profile" activeColor="deepPink">
      <template #item-icon>
        <img src="../assets/img/profile.svg">
      </template>
      <template #item-icon-active>
        <img src="../assets/img/profile_active.svg">
      </template>
      <template #item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from '../components/tabbar/TabBar'
  import TabBarItem from '../components/tabbar/TabBarItem'

  export default {
    name: "mainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
