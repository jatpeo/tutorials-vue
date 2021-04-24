import {add,sub} from './mathUtil.js'
 
 let a = add(1,2);
 console.log(a)
 
 let b = sub(2,3);
 console.log(b)
 const ccc=19;
 
 //3 依赖css文件  这样就会将css进行打包
require('../src/css/normal.css')  

//4 引入less
require("../src/css/special.less")

//5 使用vue进行开发
import Vue from 'vue'  //从node_module中取出vue对象
 
// 5.1 首次使用
// const app = new Vue({
// 	el:"#app",
// 	data:{
// 		msg:'hello world'
// 	}
// })

//5.2 el和template区别  1、template直接替换el中的内容
// new Vue({
// 	el:'#app',
// 	template:`<div> 
// 	<h2>{{msg}}</h2>
// 	<button @click='btnClick'>按钮</button>
// 	<h2>{{name}}</h2>
// 	</div>`,
// 	data:{
// 		msg:'hello world',
// 		name:'jtp'
// 	},
// 	methods:{
// 		btnClick(){
// 			console.log('btnClick')
// 		}
// 	}
	
// })

//5.3 进行组件抽取
// const App = {
// 	template:`<div>
// 	<h2>{{msg}}</h2>
// 	<button @click='btnClick'>按钮</button>
// 	<h2>{{name}}</h2>
// 	</div>`,
// 	data(){
// 		return {
// 			msg:'hello world',
// 			name:'jtp'
// 		}
// 	},
// 	methods:{
// 		btnClick(){
// 			console.log('aaaaa')
// 		}
// 	}
// }

// new Vue({
// 	el:'#app',
// 	template:"<App/>",
// 	components:{
// 		App
// 	}
	
// })

//5.4 将组件抽取为单独的文件 app.js
// import App from './vue/app.js'

// new Vue({
// 	el:"#app",
// 	template:'<App/>',
// 	components:{
// 		App
// 	}
// })

//5.5 将组件抽取为App.vue

import App from './vue/App'

new Vue({
	el:'#app',
	template:'<App/>',
	components:{
		App
	}
})











