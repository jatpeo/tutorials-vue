// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false;

/** el和template区别template会替换掉el中的内容 */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});

// runtime-complier   vue1.x   代码量多   complier即指template->ast
// template ->ast ->render -> virtual Dom ->UI

// runtime-only  效率更高 省去中间转换为ast  vue2.x  代码量少
// render->virtual Dom -ui
