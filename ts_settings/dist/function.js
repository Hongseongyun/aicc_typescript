"use strict";
// 함수의 타입 지정
// return 값이 없을 경우
function add(a, b) {
    console.log(a + b);
}
// return 값이 있을 경우
function add1(a, b) {
    return a + b;
}
// boolean 타입 리턴
function isAdult(age) {
    return age > 18;
}
// string 타입 리턴
function hello(name) {
    return `hello ${name} world!!`;
}
console.log(hello());
// optional 파라미터
function hello2(name, age) {
    // 옵셔널 파라미터가 맨 앞에 올 수 없다.
    if (age !== undefined) {
        return `hello ${name}, you are ${age} years old`;
    }
    else {
        return `hello ${name}`;
    }
}
console.log('marshall');
// 나머지(rest) 파라미터
function add2(...numbers) {
    // return numbers.reduce((result, num) => result + num, 0);
    return numbers;
}
console.log(add2(1, 2, 3));
console.log(add2(1, 2, 3, 4, 5, 6, 7, 8));
