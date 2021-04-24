import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import request from './utils/request'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
});

//=================基础======================
//模拟请求的网站：https://httpbin.org/#/HTTP_Methods/post_post
//方式1 axios(config)  标准格式 config->对象形式  不指定为get
//config 为对象可以指定请求方法，请求参数params，data等
//可以发送 任意请求
// axios({
//   method: 'get',
//   url: 'http://123.207.32.32:8000/home/multidata'
//
// }).then(res => {
//   // console.log(res);
// });

//方式二，使用提供的axios的具体请求方法进行    请求别名
// get=>   axios.get(url,config)    params是固定的=》参数后面的拼接
// axios.get("http://123.207.32.32:8000/home/data", {
//   params: {
//     type: 'pop',    // =>http://123.207.32.32:8000/home/multidata?id=1
//     page: 1
//   }
// }).then(res => {
//   //console.log(res);
// });

//post=>  axios.post(url,data,config)
// axios.post("https://httpbin.org/post", {}, {}).then(res => {
//
// });
// 可以省略config，data参数为提交的参数
// axios.post('https://httpbin.org/post', {
//   firstName: 'Fred',
//   lastName: 'Flintstone'
// })
//   .then(function (response) {
//     //console.log(response);
//   })
//   .catch(function (error) {
//    // console.log(error);
//   });

//============执行多个并发请求============
//目的一个业务需要两个请求同时访问   axios返回的就是一个Promise对象
// axios.all([axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }), axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'pop',    // =>http://123.207.32.32:8000/home/multidata?id=1
//     page: 5
//   }
// })]).then(axios.spread((res1,res2)=>{    //axios.spread()将两次返回的结果进行拆分  原理数组的解构
//   console.log(res1);
//   console.log(res2);
// }));

//============全局配置===================
// axios.defaults.baseURL='http://123.207.32.32:8000';
// axios.defaults.timeout = 5000;    //超时时间
// axios.defaults.withCredentials = false; //跨域是否带token

//============axios的实例==============
//某些请求需要使用特定的baseURL或者timeout或者content-Type等.
//这个时候, 我们就可以创建新的实例, 并且传入属于该实例的配置信息.

//请求1 服务器1
// const instance1 = axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:5000,
//   header:{
//     'Content-Type':'application/json'   //请求头信息   告诉客户端实际返回的内容的内容类型   存在与response中
//   }
// });
// instance1.get('/home/data',{
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then(res=>{
//   console.log(res);
// });

//请求2 服务器2
// const instance2 = axios.create({
//   baseURL:'http://121.41.231.47',
//   timeout:5000,
//   header:{
//     'Content-Type':'application/json'   //请求头信息   告诉客户端实际返回的内容的内容类型   存在与response中
//   }
// });


/**
 * 自己分装request.js
 */
request({
  url:'/home/multidata'
}).then(res=>{
  console.log(res);
}).catch(err=>{
  console.log(err);
});
