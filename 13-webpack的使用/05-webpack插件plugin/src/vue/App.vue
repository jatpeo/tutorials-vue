<template>
	<div>
	<h2 class="title">{{msg}}</h2>
	<button @click='btnClick'>按钮</button>
	<h2>{{name}}</h2>
	<Cpn/>
	</div>
</template>

<script>
	import Cpn from './Cpn'
	export default {
		name:"App",
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
		},
		components:{
			Cpn
		}
	}
</script>

<style>
	.title{
		font-weight: bold;
	}
</style>
