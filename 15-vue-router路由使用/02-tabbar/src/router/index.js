import Vue from 'vue'
import Router from 'vue-router'
//懒加载
const Home = ()=>import('../views/home/Home');
const Cart = ()=>import('../views/home/Home');
const Category = ()=>import('../views/cart/Cart');
const Profile = ()=>import('../views/profile/Profile');


//安装路由插件
Vue.use(Router);

//2 创建路由对象
const routes = [
  {
    path:'',
    component:Home
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/profile',
    component:Profile
  }
];
const router  = new Router({
  routes,
  mode:'history'
});

//3 导出router
export default router;
