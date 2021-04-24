import {flag,sum,number,lastName,num1,all,Person} from './aaa.js'  //这里js目前不能省略
//import add from './aaa.js' //可以自己定义名称  使用export default导出
if(flag){
	console.log('mmmmm.js')
}
console.log(sum(12,34))
console.log(number+"-"+lastName)
console.log(num1())
console.log(all(12,8))

const p = new Person();
p.run()

//add()

//全部导入
import * as aaa from './aaa.js'
console.log(aaa.lastName)