<template>
	<div id="Cpn">
		<ul>
			<li v-for="item in testArr"> {{item}}</li>
		</ul>
		<h2>{{flag}}</h2>
	</div>
</template>

<script>
	export default {
		name:"Cpn",
		data(){
			return {
				testArr:['AA','BB','CC','DD'],
				flag:'美元'
			}
		}
	}
</script>

<style>
</style>
