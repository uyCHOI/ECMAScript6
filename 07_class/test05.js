// 자바스크립트는 ES6의 class를 포함하여 모든 선언(var, let, const, function, function*, class)을 호이스팅한다. 
// 하지만 클래스는 스코프의 선두에서 선언문에 도달할 때까지 일시적 사각지대(Temporal Dead Zone; TDZ)에 빠진다. 
// 따라서 class 선언문 이전에 class를 참조하면 참조 에러(ReferenceError)가 발생한다.

const foo = new Foo(); // ReferenceError: Foo is not defined
class Foo {}