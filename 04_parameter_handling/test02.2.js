//ES6에서는 rest 파라미터를 사용하여 가변 인자를 함수 내부에 배열로 전달할 수 있다.
//이렇게 하면 유사 배열인 arguments 객체를 배열로 변환하는 등의 번거로움을 피할 수 있다.
function sum(...args) {
    console.log(arguments); // Arguments(5)&nbsp;[1, 2, 3, 4, 5, callee: (...), Symbol(Symbol.iterator): ƒ]
    console.log(Array.isArray(args)); // true
    return args.reduce((pre, cur) => pre + cur);
  }
console.log(sum(1, 2, 3, 4, 5)); // 15


var normalFunc = function () {};
console.log(normalFunc.hasOwnProperty('arguments')); // true

const arrowFunc = () => {};
console.log(arrowFunc.hasOwnProperty('arguments')); // false