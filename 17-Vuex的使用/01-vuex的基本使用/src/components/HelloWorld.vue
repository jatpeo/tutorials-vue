<template>
    <div>
      <h2>{{counter}}</h2>
      <h2>{{$store.state.counter}}</h2>
      <h2>{{$store.getters.powerCounter}}</h2>
      <h2>{{$store.getters.upAge30}}</h2>
      <h2>info对象内容是否是响应式{{$store.state.info}}</h2>
    </div>
</template>

<script>
    export default {
        name: "HelloWorld",
        props:{
          counter:Number
        }
    }
</script>

<style scoped>

</style>
