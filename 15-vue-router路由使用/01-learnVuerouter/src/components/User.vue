<template>
    <div>
      <h2>用户界面</h2>
<!--      取到的路由参数的值-->
      <h3>用户信息id：{{ $route.params.userid }}</h3>
      <button @click="btnClick">按钮</button>
    </div>
</template>

<script>
    export default {
        name: "User",
        methods:{
          btnClick(){
            //所有组件都继承Vue的原型
            console.log(this.$router)
            console.log(this.$route)
            this.test()       //使用原型方法
            console.log(this.name)  //使用原型的属性
          }
        },
      beforeRouteEnter(to,from,next){
          console.log('组件内的守卫...beforeRouteEnter,不能使用this')
      },
      beforeRouteUpdate(to, from, next) {
        // 在当前路由改变，但是该组件被复用时调用
        // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
        // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
        // 可以访问组件实例 `this`
        console.log('组件内的守卫...beforeRouteUpdate,能使用this')
      },
      beforeRouteLeave(to, from, next) {
        // 导航离开该组件的对应路由时调用
        // 可以访问组件实例 `this`
        console.log('组件内的守卫...beforeRouteLeave,能使用this')
      }
    }
</script>

<style scoped>

</style>
