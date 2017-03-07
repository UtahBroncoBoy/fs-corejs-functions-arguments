export default class Calculator {
  constructor(){

  }
  add(...numbers) {
    return numbers.reduce((prev, curr) => {
      return prev + curr;
    },0)
  }
  introspect(){
  return arguments;
  }
}