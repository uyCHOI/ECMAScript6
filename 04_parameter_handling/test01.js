// ES6
function plus(x = 0, y = 0) {
    // 파라미터 x, y에 인수를 할당하지 않은 경우, 기본값 0을 할당한다.
    return x + y;
}

console.log(plus());     // 0
console.log(plus(1, 2)); // 3