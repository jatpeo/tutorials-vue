// if(flag){
// 	console.log('小明好棒')
// }
(function(){
	if(moduleA.flag){
		console.log('调用modelA')
	}
	
	console.log(moduleA.sum(10,20))
})()

//CommonJS require
var {flag,sum}= require('./aaa.js')


