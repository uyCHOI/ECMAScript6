// 부모 클래스
class Circle {
    constructor(radius) {
      this.radius = radius; // 반지름
    }
  
    // 원의 지름
    getDiameter() {
      return 2 * this.radius;
    }
  
    // 원의 둘레
    getPerimeter() {
      return 2 * Math.PI * this.radius;
    }
  
    // 원의 넓이
    getArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
  
  // 자식 클래스
  class Cylinder extends Circle {
    constructor(radius, height) {
      super(radius);
      this.height = height;
    }
  
    // 원통의 넓이: 부모 클래스의 getArea 메소드를 오버라이딩하였다.
    getArea() {
      // (원통의 높이 * 원의 둘레) + (2 * 원의 넓이)
      return (this.height * super.getPerimeter()) + (2 * super.getArea());
    }
  
    // 원통의 부피
    getVolume() {
      return super.getArea() * this.height;
    }
  }
  
  // 반지름이 2, 높이가 10인 원통
  const cylinder = new Cylinder(2, 10);
  
  // 원의 지름
  console.log(cylinder.getDiameter());  // 4
  // 원의 둘레
  console.log(cylinder.getPerimeter()); // 12.566370614359172
  // 원통의 넓이
  console.log(cylinder.getArea());      // 150.79644737231007
  // 원통의 부피
  console.log(cylinder.getVolume());    // 125.66370614359172
  
  // cylinder는 Cylinder 클래스의 인스턴스이다.
  console.log(cylinder instanceof Cylinder); // true
  // cylinder는 Circle 클래스의 인스턴스이다.
  console.log(cylinder instanceof Circle);   // true