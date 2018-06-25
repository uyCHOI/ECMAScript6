/*
    backtick 문자 ` 를 사용한다.
*/

// const template = `템플릿 리터럴은 '작은따옴표(single quotes)'과 "큰따옴표(double quotes)"를 혼용할 수 있다.`;

// 탬플릿 리터럴 내의 모든 white-space는 있는 그대로 적영된다.
const template = `<ul class="nav-items">
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>`;

console.log(template);

// 탬플릿 리터럴은 + 연산자를 사용하지 않아도 간단한 방법으로 새로운 문자열을 삽입할수 있다.
const first = 'Ung-mo';
const last = 'Lee';

// ES5: 문자열 연결
console.log('My name is ' + first + ' ' + last + '.');

// ES6: String Interpolation
console.log(`My name is ${first} ${last}.`); // My name is Ung-mo Lee.

//${expression}을 템플릿 대입문(Template substitution)이라 한다. 템플릿 대입문에는 문자열뿐만 아니라 자바스크립트 표현식을 사용할 수 있다.

// 템플릿 대입문에는 문자열뿐만 아니라 표현식도 사용할 수 있다.
console.log(`1 + 1 = ${1 + 1}`); // 1 + 1 = 2

const name = 'ungmo';

console.log(`Hello ${name.toUpperCase()}`); // Hello UNGMO