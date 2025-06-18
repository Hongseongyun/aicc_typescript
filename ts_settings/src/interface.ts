interface User4 {
  name: string;
  age: number;
  gender: string;
  birthYear: number;
}

let user4: User4 = {
  name: 'marshall',
  age: 20,
  gender: 'male',
  birthYear: 2005,
};

user4.name = 'John';
// user4.birthYear = 2006; // 오류

// console.log(user4);

type Score = 'A' | 'B' | 'C' | 'D' | 'F';

interface Grade {
  // 1: string;
  // 2: string;
  // 3: string;
  [grade: number]: Score;
}

let myGrade: Grade = {
  1: 'A',
  2: 'C',
  3: 'F',
};

// console.log(myGrade);

// 인터페이스 함수 정의

interface myFoo {
  (a: number, b: number): number;
}

const myFoo: myFoo = (a, b) => a + b;

interface isAdult {
  (age: number): boolean;
}

const adult: isAdult = (age) => age > 18;

// 인터페이스 클래스 상속
interface Car {
  color: string;
  wheels: number;
  start(): void;
}

// implements 키워드 상속
class MyCar implements Car {
  color;
  constructor(color: string) {
    this.color = color;
  }
  wheels = 4;
  start() {
    console.log('start');
  }
}

const myCar = new MyCar('blue');
console.log(myCar);
myCar.start();

// 인터페이스 간 상속 - extends 키워드로 상속
interface YourCar extends Car {
  door: number;
  stop(): void;
}

const myYourCar: YourCar = {
  // 상속된 모든 요소를 포함해야 한다.
  door: 4,
  color: 'red',
  wheels: 4,
  start() {
    console.log('Start');
  },
  stop() {
    console.log('Stop');
  },
};

// 인터페이스 여러개 확장

interface Bag2 {
  name: string;
}
interface MyGift extends Car, Bag2 {
  price: number;
}

const myGift: MyGift = {
  name: 'my bag',
  price: 1000,
  color: 'red',
  wheels: 4,
  start() {
    console.log('start');
  },
};

console.log(myGift);
