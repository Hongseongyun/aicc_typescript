"use strict";
// TypeScript에서 유틸리티 타입은 TypeScript에서 제공하는 여러 전역 유틸리티 타입으로, 일반적인 타입 변환을 쉽게 하기 위해 사용할 수 있다. 유틸리티 타입은 이미 정의해 놓은 타입을 변환할 때 유용하게 쓰이며, 간결한 문법으로 새로운 타입을 정의할 수 있다.
const uk = 'id'; // 값으로 지정할 수 있는 키는 User 타입의 키 중 하나이다.
// let admin: User7 = {
//   id: 1,
//   name: 'marshall',
//   age: 20,
//   gender: 'm',
// };
// Partial<T> : 모든 프로퍼티를 선택적으로 변경한다.
let admin = {
    id: 1,
    name: 'marshall',
};
const score5 = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
};
function isValid(user8) {
    const result = {
        id: user8.id > 0,
        name: user8.name !== '',
        age: user8.age > 0,
    };
    return result;
}
console.log(isValid({ id: 1, name: 'a', age: 10 }));
// Pick<T,K>
const admin10 = {
    id: 0,
    name: 'Tim',
};
// Omit<T,K>
const admin11 = {
    id: 1,
    name: 'marshall',
};
