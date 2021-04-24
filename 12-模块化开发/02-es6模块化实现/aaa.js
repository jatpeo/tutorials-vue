var name="xiaoming";
var age =18;
var flag =true;

function sum(a1,a2){
	return a1+a2;
}


//导出方式1 定义好导出
export{
	flag,
	sum
}

//导出方式2 变量
export var number = 1000;
export let lastName = 'laoxiu'

//导出方式3 函数/类
export function num1(){
	return "函数num1"
}
export let all = function total(a,b){
	return a+b;
}

export class Person{  //导出es的类
	run(){
		console.log("run....")
	}
}

//导出方式5 export default  可以自己定义名称
const address = "兰州市";
export default address

// export default function(){
// 	console.log("export default 导出函数，不需要加函数名")
// }

//导出方式6 全部导出

