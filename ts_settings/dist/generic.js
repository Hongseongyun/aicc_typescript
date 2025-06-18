"use strict";
// generic은 클래스나 함수, 인터페이스를 다양한 타입으로 재사용할 수 있도록 해준다.
// function getArray(arr: number[] | string[] | boolean[]): number {
//   return arr.length;
// }
function getArray(arr) {
    return arr.length;
}
console.log(getArray([1, 2, 3]));
console.log(getArray(['1', '2', '3']));
console.log(getArray([true, false, false]));
const m1 = {
    name: 'my car',
    price: 1000,
    option: {
        color: 'red',
        wheels: 4,
    },
};
const m2 = {
    name: 'my car',
    price: 1000,
    option: 'sun roof',
};
