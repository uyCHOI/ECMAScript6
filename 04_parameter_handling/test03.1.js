// Spread 연산자(Spread Operator, ...)는 연산자의 대상 배열 또는 이터러블을 개별 요소로 분리한다
// ...[1, 2, 3]는 [1, 2, 3]을 개별 요소로 분리한다(→ 1, 2, 3)
console.log(...[1, 2, 3]) // 1, 2, 3

// 문자열은 이터러블이다.
console.log(...'Hello');  // H e l l o

// Map과 Set은 이터러블이다.
console.log(...new Map([['a', '1'], ['b', '2']]));  // [ 'a', '1' ] [ 'b', '2' ]
console.log(...new Set([1, 2, 3]));  // 1 2 3

/* Spread 연산자를 사용한 매개변수 정의 (= Rest 파라미터)
   ...rest는 분리된 요소들을 함수 내부에 배열로 전달한다. */
   function foo(param, ...rest) {
    console.log(param); // 1
    console.log(rest);  // [ 2, 3 ]
  }
  foo(1, 2, 3);
  
  /* Spread 연산자를 사용한 인수
    배열 인수는 분리되어 순차적으로 매개변수에 할당 */
  function bar(x, y, z) {
    console.log(x); // 1
    console.log(y); // 2
    console.log(z); // 3
  }
  
  // ...[1, 2, 3]는 [1, 2, 3]을 개별 요소로 분리한다(-> 1, 2, 3)
  // spread 연산자에 의해 분리된 배열의 요소는 개별적인 인자로서 각각의 매개변수에 전달된다.
  bar(...[1, 2, 3]);