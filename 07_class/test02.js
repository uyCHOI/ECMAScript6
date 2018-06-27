class Foo {}
// 클래스의 인스턴스를 생성하려면 new 연산자와 함께 constructor를 호출한다.
const foo = new Foo();

console.log(Foo === Foo.prototype.constructor); // true
class Foo {}
// new 연산자를 사용하지 않고 constructor를 호출하면 타입 에러(TypeError)가 발생한다. constructor는 new 연산자 없이 호출할 수 없다.
// const foo = Foo(); // TypeError: Class constructor Foo cannot be invoked without 'new'