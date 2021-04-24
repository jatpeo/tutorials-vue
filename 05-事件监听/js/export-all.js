//默认导出一个
// export default function hello3(){
//     console.log('全部导出。。hello3')
// }

//导出多个
let test1 = function test1(){
    console.log('全部导出。。test1')
}

let test2 = function test2(){
    console.log('全部导出。。test2')
}
export default {
    test1,
    test2
}
