"use strict";
let user4 = {
    name: 'marshall',
    age: 20,
    gender: 'male',
    birthYear: 2005,
};
user4.name = 'John';
let myGrade = {
    1: 'A',
    2: 'C',
    3: 'F',
};
const myFoo = (a, b) => a + b;
const adult = (age) => age > 18;
// implements 키워드 상속
class MyCar {
    constructor(color) {
        this.wheels = 4;
        this.color = color;
    }
    start() {
        console.log('start');
    }
}
const myCar = new MyCar('blue');
console.log(myCar);
myCar.start();
const myYourCar = {
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
const myGift = {
    name: 'my bag',
    price: 1000,
    color: 'red',
    wheels: 4,
    start() {
        console.log('start');
    },
};
console.log(myGift);
