// ES5
// var pow = function (x) { return x * x; };
// console.log(pow(10)); // 100

// ES6
// const pow = x => x * x;
// console.log(pow(10)); // 100

// ES5
// var arr = [1, 2, 3];
// var pow = arr.map(function (x) { // x는 요소값
//   return x * x;
// });

// console.log(pow); // [ 1, 4, 9 ]

// ES6
const arr = [1, 2, 3];
const pow = arr.map(x => x * x);

console.log(pow); // [ 1, 4, 9 ]