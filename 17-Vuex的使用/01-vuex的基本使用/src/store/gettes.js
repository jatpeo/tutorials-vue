export default {
  powerCounter(state) {
    return state.counter * state.counter;  //计算平方
  },

  upAge30(state) {
    return state.students.filter(s => s.age > 30)
  },
  upAgeParam: (state) => (age) => {  //getter带参数，返回的是一个回调函数
    return state.students.filter(s => s.age > age);
  }
}
