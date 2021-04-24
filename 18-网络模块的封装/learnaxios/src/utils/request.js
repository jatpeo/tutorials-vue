import axios from 'axios'

//axios 封装
export default function request(option) {
  // 1 创建axios实例
   const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  });
   //2 拦截器
  //请求拦截器
  // 使用场景
  // 1 当发送网路请求，页面中添加一个loading组件，作为动画
  // 2 某些请求要求用户必须登陆，判断用户是否有token，如果没有返回login
  // 3 对请求的参数进行序列化
  instance.interceptors.request.use(config=>{
    console.log('请求成功');
    return config;    //如果成功 一定要返回config
  },error => {
    console.log('请求失败');
    return error;
  });
  // 响应拦截器
  // 使用场景
  //1 可能的错误比如请求超时，可以将页面跳转到一个错误页面中。
  //2 响应的成功拦截中，主要是对数据进行过滤。
  //3 响应的失败拦截中，可以根据status判断报错的错误码，跳转到不同的错误提示页面。
  instance.interceptors.response.use(response=>{
    console.log('响应成功');
    return response.data;
  },error=>{
    console.log('响应失败');
    return error;
  });

  return instance(option);
}
