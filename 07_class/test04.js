// 클래스 몸체(class body)에는 메소드만 선언할 수 있다. 
// 클래스 바디에 클래스 프로퍼티(멤버 변수)를 선언하면 문법 에러(SyntaxError)가 발생한다.
// 클래스 프로퍼티의 선언과 초기화는 반드시 constructor 내부에서 실시한다.
class Foo {
    constructor(name = '') {
      this.name = name; // 클래스 프로퍼티의 선언과 초기화
    }
}
const foo = new Foo('Lee');
console.log(foo.name); // 클래스 외부에서 참조할 수 있다.