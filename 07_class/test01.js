// class 키워드를 사용하여 정의한다. 
class Person {
    constructor(name) {
      this._name = name;
    }

    sayHi() {
        console.log(`Hi! ${this._name}`);
    }
}

const me = new Person('Lee');
me.sayHi(); // Hi! Lee

console.log(me instanceof Person); // true

const Foo = class MyClass {};

const foo = new Foo();
console.log(foo);  // MyClass {}

// new MyClass(); // ReferenceError: MyClass is not defined