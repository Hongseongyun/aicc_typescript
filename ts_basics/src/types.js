"use strict";
//string
let car = 'BMW';
car = '3';
//number
let num = 1;
num = 2;
// array
let arr1 = [1, 2, 3];
// let arr2: Array<String> = ["1", "2"]
let arr2 = ['1', '2', '3'];
arr1.push(4);
arr2.push(5);
// typle
let person;
person = ['lmarshall', 20];
console.log(person);
// enum 타입 = 비슷한 성격의 요소들을 나열하는 타입
var Os;
(function (Os) {
    Os[Os["Windows"] = 0] = "Windows";
    Os[Os["Ios"] = 1] = "Ios";
    Os[Os["Android"] = 2] = "Android";
})(Os || (Os = {}));
let myOs;
myOs = Os.Windows;
console.log(myOs);
