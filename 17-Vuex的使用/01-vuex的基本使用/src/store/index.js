import Vue from 'vue';
import Vuex from 'vuex';
import {INCREMENT} from './mutations-type' //导入mudations自定义变量


//1 安装插件 -》Vuex.instal
Vue.use(Vuex);

//2 创建对象
const store = new Vuex.Store({
  state: {  //一开始在此定义，则会将数据加入到响应式数据中，当属性发生变化，不同界面用到属性会通知自动刷新
    counter: 100,
    students: [
      {id: 1, name: 'aaa', age: 23},
      {id: 2, name: 'bbb', age: 13},
      {id: 3, name: 'ccc', age: 33},
      {id: 4, name: 'ddd', age: 18},
      {id: 5, name: 'eee', age: 45}
    ],
    info: {name: 'kobe', age: 40}, //演示Mutation响应规则
  },
  mutations: {  //这里函数要是同步函数
    //方法
    [INCREMENT](state) {
      state.counter++;
    },
    // increment(state) {  //参数state是默认传过来
    //   state.counter++;
    // },
    decrement(state) {
      state.conter--;
    },
    incrementCount(state, payload) { //代参数
      console.log(payload);
      state.counter += payload.count
    },
    addSutdent(state, student) {
      state.students.push(student)
    },
    updataInfo(state, payload) {  //修改对象信息
      //错误代码
      setTimeout(() => {
        ///xxx  不能进行异步操作
      }, 1000);

      //1 直接修改
      //state.info.name='hhh'
      //2 增加新属性 不会添加到响应式 不可取
      //state.info[address] = '兰州'

      //3 推荐Vue.set()
      Vue.set(state.info, 'address', '洛杉矶')    //addd
      //delete state.info.age //删除 不是响应式
      //Vue.delete(state.info,'age')    //delete

      //4

    }
  },
  actions: { //这里是异步操作
    //context 上下文 -->store对象  方法一 不推荐
    // actUpdateInfo(context,payload){  //payload是参数
    //   setTimeout(()=>{
    //     context.commit('updataInfo');
    //     console.log(payload);
    //     //模拟 通知已经修改晚完
    //     console.log(payload.message);
    //     payload.success();
    //   },1000)
    // },
    // 方法二 推荐
    actUpdateInfo(context, payload) {  //payload是参数

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updataInfo');
          console.log("success");
          resolve('1111')
        }, 1000)
      })
    },


  },
  getters: {   //计算属性
    powerCounter(state) {
      return state.counter * state.counter;  //计算平方
    },

    upAge30(state) {
      return state.students.filter(s => s.age > 30)
    },
    upAgeParam: (state) => (age) => {  //getter带参数，返回的是一个回调函数
      return state.students.filter(s => s.age > age);
    }


  },
  modules: {  //可以分模块管理 ，单独管理
    a: moduleA,
    // b: moduleB

  }

});
const moduleA = {
  state: {
    name:'zhangsan'
  }
  // mutations: {},
  // actions: {},
  // getters: {}

};
// const moduleB = {
//   state: {},
//   mutations: {},
//   actions: {},
//   getters: {}
// };

export default store;
