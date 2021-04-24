import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // render: h => h(App)  createElement是一个函数
  render: function (createElement) {
  // 1 普通用法 createElement（'标签'，{标签的属性}，[...]） 创建出一个标签，替换掉el，第二个参数标签的属性,第三个参数：标签的内容
    //return createElement('h2',{class:'box'},['hello world'])
  // 2 用法2 传入组件对象
    return  createElement(App);
  }
});

// runtime-complier   vue1.x
// template ->ast ->render -> virtual Dom ->UI

// runtime-only  效率更高 省去中间转换为ast  vue2.x
// render->virtual Dom -ui

//
