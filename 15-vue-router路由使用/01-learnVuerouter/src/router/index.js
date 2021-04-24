// 配置路由相关信息
import VueRouter from 'vue-router';
import Vue from 'vue';

import Home from '../components/Home';
import About from '../components/About';
import User from '../components/User';
import Article from '../components/Article';
import Music from '../components/Music';
import Profile from '../components/Profile';

//1 通过Vue.use(插件) 安装插件  即执行VueRouter.install
Vue.use(VueRouter);
//2 创建VueRouter对象
const routes = [
  {
    path:'/',
    redirect:'/home'  //重定向到某个路径
  },
  {
    path:'/home',
    component:Home,
    meta:{
      title:'home'
    },
    children:[
      {
        path:'',     //嵌套路由
        component:Article,
        meta:{
          title:'article'
        }

      },
      {
        path:'article',     //嵌套路由
        component:Article,
        meta:{
          title:'article'
        }
      },
      {
        path:'music',
        component:()=>import('../components/Music'),  //es6写法 路由的懒加载
        meta:{
          title:'music'
        }
      },
      {
        path:'profile/:id',
        component:Profile,
        meta:{
          title:'profile'
        }
      }
    ]

  },
  {
    path:'/about',
    component:About,
    meta:{
      title:'about'
    }
  },
  {
    path:'/user/:userid',
    component:User,
    meta:{
      title:'user'
    },
    beforeEnter: (to, from, next) => {  //路由独享守卫
     console.log('user的路由独享守卫。。。');
      next()
    }
  }
];

const router = new VueRouter({
  //配置路由和组件之间的应用关系
  routes,
  mode:'history',  //指定模式为history模式
  linkActiveClass:'active'   //这里可以统一修改默认处于活跃状态的路由样式
});

//也称前置钩子  前置守卫
//全局导航守卫  这里需求是 点那个页面 浏览器tab显示的对应的名称
router.beforeEach((to, from, next)=>{
    document.title = to.meta.title;   //使用路由中定义的meta属性
    document.title = to.matched[0].meta.title; //上面取不到，就用该方法

  //判断是否登陆
    // if(!用户登陆){
    //   next('/login')
    // }
    next();
});
// 后置钩子 后置守卫
router.afterEach((to,from)=>{
  console.log('后置钩子。。。')
});


//3 将router对象传入到Vue实例
export default router;

