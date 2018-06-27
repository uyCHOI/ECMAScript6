// constructor는 생략할 수 있다. constructor를 생략하면 클래스에 constructor() {}를 포함한 것과 동일하게 동작한다. 즉, 빈 객체를 생성한다.
//  따라서 클래스 프로퍼티를 선언하려면 인스턴스를 생성한 이후, 클래스 프로퍼티를 동적 할당해야 한다.
class Foo {
    // constructor는 인스턴스의 생성과 동시에 클래스 프로퍼티의 생성과 초기화를 실행한다.
    constructor(num) {
        this.num = num;
    }
}

const foo = new Foo(3);
console.log(foo); // Foo {}

// 클래스 프로퍼티의 동적 할당 및 초기화
foo.num = 1;
console.log(foo); // Foo&nbsp;{ num: 1 }