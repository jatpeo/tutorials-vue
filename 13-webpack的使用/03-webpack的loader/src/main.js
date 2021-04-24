import {add,sub} from './mathUtil.js'
 
 let a = add(1,2);
 console.log(a);
 
 let b = sub(2,3);
 console.log(b);
 const ccc=19;
 
 //3 依赖css文件  这样就会将css进行打包
require('../src/css/normal.css');

//4 引入less
require("../src/css/special.less");