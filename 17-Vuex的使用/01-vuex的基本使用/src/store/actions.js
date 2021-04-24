export default {
  actUpdateInfo(context, payload) {  //payload是参数

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('updataInfo');
        console.log("success");
        resolve('1111')
      }, 1000)
    })
  },
}
