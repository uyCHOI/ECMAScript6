// ES6
const obj = {
    name: 'Lee',
    // 메소드 축약 표현
    sayHi() {
      console.log('Hi! ' + this.name);
    }
  };
  
  obj.sayHi(); // Hi! Lee