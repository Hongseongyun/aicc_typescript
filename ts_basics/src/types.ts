//string

let car: string = 'BMW';
car = '3';

//number
let num: number = 1;
num = 2;

// array
let arr1: Array<number> = [1, 2, 3];

// let arr2: Array<String> = ["1", "2"]
let arr2: String[] = ['1', '2', '3'];

arr1.push(4);
arr2.push('5');

// typle

let person: [string, number];
person = ['marshall', 20];
console.log(person);

// enum 타입 = 비슷한 성격의 요소들을 나열하는 타입

enum Os {
  Windows,
  Ios,
  Android,
}

let myOs: Os;
myOs = Os.Windows;
console.log(myOs);
