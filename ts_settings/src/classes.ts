// 클래스는 객체를 생성하는 설계도로 볼 수 있다.
// 클래스 내부에는 다양한 타입이 사용가능하다.
// 클래스 내부에 정의된 함수를 매서드라 한다.

class Car {
  color: string; // 클래스 내부에서 사용할 변수의 타입을 지정. 선언한 시점에서 전달 받으려면 constructor에서 전달 받는다.
  constructor(color: string) {
    this.color = color;
  }

  start() {
    console.log('start');
  }
}

const newCar = new Car('red');
newCar.start();
console.log(newCar.color);

// 접근제한자
// - public: 클래스 내부와 외부에서 모두 사용 가능
// - private: 클래스 내부에서만 사용 가능
// - protected: 클래스 내부와 상속받은 클래스에서만 사용 가능

class Car1 {
  // public name: string = 'car';
  // private name: string = 'car';
  protected name: string = 'car';
  color: string;

  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log('start');
  }
}

class MyNewCar extends Car1 {
  constructor(color: string) {
    super(color); // 상속 받은 값 사용
  }

  showName() {
    console.log(this.name);
  }
}

const myNewCar = new MyNewCar('red');
console.log(myNewCar);
myNewCar.showName();

// 정적 맴버변수: this가 아닌 클래스 이름을 사용하여 접근
class Car2 {
  name: string = 'car';
  color: string;
  static wheels = 4;

  constructor(color: string) {
    this.color = color;
  }

  start() {
    console.log('start');
    console.log(Car2.wheels);
  }
}

const myNewCar2 = new Car2('red');
console.log(myNewCar2.color);
myNewCar2.start();

// 추상 클래스: new 키워드를 사용하여 직접적으로 사용이 안되고, 상속을 통해서만 사용 가능
abstract class Car3 {
  color: string;
  constructor(color: string) {
    this.color = color;
  }

  start() {
    console.log('start');
  }
}

// const myNewCar3 = new Car3("red")  //불가

class MyNewCar4 extends Car3 {
  constructor(color: string) {
    super(color);
  }

  someNewFunction() {
    console.log('상속 이외의 로직을 정의');
  }
}

const myNewCar4 = new MyNewCar4('red');
console.log(myNewCar4);
myNewCar4.someNewFunction();
