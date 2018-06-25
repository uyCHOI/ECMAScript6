// 화살표 함수로 메소드를 정의하는 것은 피해야 한다
const person = {
    name: 'Lee',
//   sayHi: () => console.log(`Hi ${this.name}`)
    sayHi() { // === sayHi: function() { ES6의 축약 메소드 표현을 사용하는 것이 좋다.
        console.log(`Hi ${this.name}`);
    }
};

person.sayHi(); // Hi undefined