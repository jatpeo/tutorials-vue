import Vue from 'vue';
import Vuex from 'vuex';
import mutations from 'mutations'
import actions from 'actions'
import getters from 'gettes'
import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'

/**
 * 演示Vuex模块的抽取
 */


//1 安装插件 -》Vuex.instal
Vue.use(Vuex);

const state = {
  name: 'zhangsan',
  counter: 100,
  students: [
    {id: 1, name: 'aaa', age: 23},
    {id: 2, name: 'bbb', age: 13},
    {id: 3, name: 'ccc', age: 33},
    {id: 4, name: 'ddd', age: 18},
    {id: 5, name: 'eee', age: 45}
  ],
  info: {name: 'kobe', age: 40}, //演示Mutation响应规则
};

//演示 index.js进行业务抽取分离
// mutations抽取为一个文件 -> mutations.js
// actions -> action.js
// getters -> getters.js
// modules -> module文件夹->module.js
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules:{
    a:moduleA,
    b:moduleB
  }
});
