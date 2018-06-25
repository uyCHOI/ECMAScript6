// 화살표 함수로 정의된 메소드를 prototype에 할당하는 경우도 동일한 문제가 발생한다.
const person = {
    name: 'Lee',
};

// Object.prototype.sayHi = () => console.log(`Hi ${this.name}`);
Object.prototype.sayHi = function() {
    console.log(`Hi ${this.name}`);
};
person.sayHi(); // Hi undefined     