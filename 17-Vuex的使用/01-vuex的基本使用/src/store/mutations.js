import {INCREMENT} from './mutations-type'
import Vue from "vue/types/vue"; //导入mudations自定义变量

export  default {
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
  incrementCount(state, payload) {
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
}
