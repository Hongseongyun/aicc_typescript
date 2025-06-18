// string

let car: string = 'BMW';
car = '3';

// number
let num: number = 1;
num = 2;

// array
// let arr1: Array<number> = [1, 2, 3];
let arr1: number[] = [1, 2, 3]; // 많이 사용

// let arr2: Array<String> = ["1", "2"]
let arr2: String[] = ['1', '2', '3']; // 많이 사용

arr1.push(4);
arr2.push('5');

// tuple 타입
let person: [string, number];
person = ['marshall', 20]; // 순서가 바뀌면 안된다.
console.log(person);

// enum 타입 - 비슷한 성격의 요소들을 나열하는 타입

enum Os {
  Windows = 10,
  Ios,
  Android,
}

let myOs: Os;
myOs = Os.Windows;
console.log(myOs);
console.log(Os['Ios']);
console.log(Os[2]);
