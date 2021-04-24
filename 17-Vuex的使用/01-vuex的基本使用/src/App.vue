<template>
  <div id="app">
    <h2>-------App内容- state相关信息--------</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <!--    mutations-->
    <h2>-------App内容 mutations相关信息---------</h2>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addSutdent">添加学生</button>
    <h2>info对象内容是否是响应式{{$store.state.info}}</h2>
    <button @click="updataInfo">info对象内容是否是响应式--修改</button>

    <h2>-------App内容 getters相关信息---------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.upAge30}}</h2>
    <!--    带参数-->
    <h2>{{$store.getters.upAgeParam(30)}}</h2>

    <h2>---------HelloWorld组件 Vuex内容------</h2>
    <hello-world/>
    <h2>-------Module中的内容---------</h2>
    <h2>{{$store.state.b.name}}</h2>
    <button @click="updateName">修改mutations</button>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="asyncUpdateName">actions</button>

  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  import {INCREMENT} from './store/mutations-type'  //导入mudations定义的变量

  export default {
    name: 'App',
    components: {
      HelloWorld
    },
    data() {
      return {
        msg: 'App组件信息',
        counter: 0
      }
    },
    methods: {
      asyncUpdateName(){
        this.$store.dispatch("aUpdateName")
      },
      updateName(){
        this.$store.commit('updateName','laowang');

      },
      updataInfo() {
        //this.$store.commit('updataInfo');
        //this.$store.commit('updataInfo', {name: 'lucy'});   //直接操作mutations  -》同步
        //this.$store.dispatch("actUpdateInfo",'我是paylod')   //操作actions  -》异步
        // 方法1
        // this.$store.dispatch("actUpdateInfo",{
        //   message:'我是参数信息',
        //   success:()=>{
        //     console.log('success完成');
        //   }
        // })   //操作actions  -》异步
        // 方法二
        this.$store.dispatch("actUpdateInfo",'我是携带信息').then(res=>{
          console.log('提交完成');
          console.log(res);
        })

        //操作actions  -》异步
      },
      addSutdent() {
        const obj = {id: 6, name: 'ddd', age: 45};
        this.$store.commit('addSutdent', obj)
      },
      addCount(count) {
        //1 普通提交风格
        //this.$store.commit('incrementCount', count)
        //2 对象风格  传过去的是一个对象，
        this.$store.commit({
          type: 'incrementCount',
          count
        })
      },
      add() {
        //this.$store.commit('increment')  //操作mutations中的方法
        this.$store.commit(INCREMENT) //使用mutations写法
      },
      sub() {
        this.$store.commit('decrement')
      }
    },
    // computed:{
    //   upAge20(){
    //     return this.$store.state.students.filter(s=>s.age>20)
    //   }
    // }
  }
</script>

<style>
</style>
