import Vue from 'vue'
import App from './App'
import router from './router'  //导入路由对象


Vue.config.productionTip = false;
Vue.prototype.test = ()=>{   //vue原型方法定义函数 表示都会执行
  console.log('test....')
};
Vue.prototype.name = 'jatpeo';


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
console.log(router)
