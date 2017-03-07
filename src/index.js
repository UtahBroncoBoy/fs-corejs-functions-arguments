export default class Calculator {
  constructor(){

  }
  add(...numbers) {
    return numbers.reduce((prevVal, currVal) => {
      return prevVal + currVal;
    },0)
  }
  introspect(){
  return arguments;
  }
}