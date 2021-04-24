//小明 
// 1 初始代码  变量名冲突
// var name = '小明';
// var age = 22;
// function sum(a1,a2){
// 	return a1+a2;
// }

// var flag = true;
// if(flag){
// 	console.log(sum(10,20))
// }

//2 使用闭包解决变量名冲突，代码不能复用 再去使用无法使用
// ;(function(){
// 	var name = '小明';
// 	var age = 22;
// 	function sum(a1,a2){
// 		return a1+a2;
// 	}	
	
// 	var flag = true;
// 	if(flag){
// 		console.log(sum(10,20))
// 	}
// })()

//3 es5使用模拟模块化
var moduleA = (function(){
	var obj = {};
	
	var flag = true;
	function sum(a1,a2){
		return a1+a2;
	}	
	obj.flag = flag;
	obj.sum = sum;
	
	return obj;
})();

//4 使用CommonJS规范 进行模块化，CommonJS用node环境支持
module.exports= {
	flag,
	sum:sum
};





