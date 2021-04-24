/**
 * 使用模块化思想进行管理
 */
//方式1 CommonJS
//工具js
function add(a,b){
	return a+b;
}

function sub(a,b){
	return a/b;
}

//1 CommonJs
// module.exports = {
// 	add,
// 	sub
// }

export {add,sub}