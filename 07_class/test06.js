class Foo {
    constructor(arr = []) {
      this._arr = arr;
    }
  
    // getter: get 키워드 뒤에 오는 메소드 이름 firstElem은 프로퍼티 이름처럼 사용된다.
    get firstElem() {
      // getter는 반드시 무언가를 반환하여야 한다.
      return this._arr.length ? this._arr[0] : null;
    }
  
    // setter: set 키워드 뒤에 오는 메소드 이름 firstElem은 프로퍼티 이름처럼 사용된다.
    set firstElem(elem) {
      // ...this._arr은 this._arr를 개별 요소로 분리한다
      this._arr = [elem, ...this._arr];
    }
  }
  
  const foo = new Foo([1, 2]);
  
  // 프로퍼티 lastElem에 값을 할당하면 setter가 호출된다.
  foo.firstElem = 100;
  
  console.log(foo.firstElem); // 100