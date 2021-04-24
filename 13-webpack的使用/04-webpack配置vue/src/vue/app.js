export default{
	template:`<div>
	<h2>{{msg}}</h2>
	<button @click='btnClick'>按钮</button>
	<h2>{{name}}</h2>
	</div>`,
	data(){
		return {
			msg:'hello world',
			name:'jtp'
		}
	},
	methods:{
		btnClick(){
			console.log('aaaaa')
		}
	}
	
	
}
//以上数据可以抽取在App.vuez