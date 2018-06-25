// Solution 1: that = this
function Prefixer(prefix) {
    this.prefix = prefix;
  }
  
  Prefixer.prototype.prefixArray = function (arr) {
    // Solution 1: that = this
    // var that = this;  // this: Prefixer 생성자 함수의 인스턴스
    // return arr.map(function (x) {
    //   return that.prefix + ' ' + x;
    // });
    // Solution 2: map(func, this)
    // return arr.map(function (x) {
    //     return this.prefix + ' ' + x;
    //   }, this); // this: Prefixer 생성자 함수의 인스턴스
    // Solution 3: bind(this)
    // return arr.map(function (x) {
    //     return this.prefix + ' ' + x;
    //   }.bind(this)); // this: Prefixer 생성자 함수의 인스턴스
    // 화살표 함수는 언제나 자신을 포함하는 외부 스코프에서 this를 계승받는다.
    Prefixer.prototype.prefixArray = function (arr) {
        return arr.map(x => `${this.prefix}  ${x}`);
      };
  };
  
  var pre = new Prefixer('Hi');
  console.log(pre.prefixArray(['Lee', 'Kim']));