// TypeScript에서 유틸리티 타입은 TypeScript에서 제공하는 여러 전역 유틸리티 타입으로, 일반적인 타입 변환을 쉽게 하기 위해 사용할 수 있다. 유틸리티 타입은 이미 정의해 놓은 타입을 변환할 때 유용하게 쓰이며, 간결한 문법으로 새로운 타입을 정의할 수 있다.

// 유틸리티 타입 종류
// Partial<T>                // 타입 T의 모든 프로퍼티를 선택적으로 만듦
// Readonly<T>               // 타입 T의 모든 프로퍼티를 읽기 전용으로 만듦
// Record<K,T>               // 타입 K를 키로, 타입 T를 값으로 하는 객체 타입 생성
// Pick<T,K>                 // 타입 T에서 프로퍼티 K만 골라서 타입을 생성
// Omit<T,K>                 // 타입 T에서 프로퍼티 K를 제외하고 타입을 생성
// Exclude<T,U>              // 타입 T에서 타입 U에 할당 가능한 타입을 제외
// Extract<T,U>              // 타입 T에서 타입 U에 할당 가능한 타입만 추출
// NonNullable<T>            // 타입 T에서 null과 undefined를 제외한 타입을 생성
// Parameters<T>             // 함수 타입 T의 매개변수 타입을 튜플 형태로 생성
// ConstructorParameters<T>  // 생성자 타입 T의 매개변수 타입을 튜플 형태로 생성
// ReturnType<T>             // 함수 타입 T의 반환값 타입을 생성
// InstanceType<T>           // 클래스 생성자 T의 인스턴스 타입을 생성
// Required<T>               // 타입 T의 모든 프로퍼티를 필수로 만듦
// ThisParameterType<T>      // 함수 타입에서 this 매개변수 타입을 추출
// OmitThisParameter<T>      // 함수 타입에서 this 매개변수를 제거한 타입을 생성
// keyof T                   // 타입 T의 프로퍼티 이름을 문자열 또는 숫자 리터럴 타입으로 추출
// ThisType<T>               // 객체 메소드 내에서 this의 타입을 명시할 때 사용

// keyof
interface User7 {
  id: number;
  name: string;
  age: number;
  gender: 'm' | 'f';
}

type UserKeys = keyof User7;
const uk: UserKeys = 'id'; // 값으로 지정할 수 있는 키는 User 타입의 키 중 하나이다.

// let admin: User7 = {
//   id: 1,
//   name: 'marshall',
//   age: 20,
//   gender: 'm',
// };

// Partial<T> : 모든 프로퍼티를 선택적으로 변경한다.

let admin: Partial<User7> = {
  id: 1,
  name: 'marshall',
};

// Record<K, T>: 키 타입 K와 값 타입 T를 받아 새로운 객체 타입을 생성한다.
// interface Score5 {
//   '1': 'A' | 'B' | 'C' | 'D';
//   '2': 'A' | 'B' | 'C' | 'D';
//   '3': 'A' | 'B' | 'C' | 'D';
//   '4': 'A' | 'B' | 'C' | 'D';
// }

type Grade5 = '1' | '2' | '3' | '4';
type Score5 = 'A' | 'B' | 'C' | 'D';

const score5: Record<Grade5, Score5> = {
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D',
};

// Record 응용
interface User8 {
  id: number;
  name: string;
  age: number;
}

function isValid(user8: User8) {
  const result: Record<keyof User8, boolean> = {
    id: user8.id > 0,
    name: user8.name !== '',
    age: user8.age > 0,
  };
  return result;
}

console.log(isValid({ id: 1, name: 'a', age: 10 }));

interface User9 {
  id: number;
  name: string;
  age: number;
  gender: 'm' | 'f';
}

// Pick<T,K>

const admin10: Pick<User9, 'id' | 'name'> = {
  id: 0,
  name: 'Tim',
};

// Omit<T,K>
const admin11: Omit<User9, 'age' | 'gender'> = {
  id: 1,
  name: 'marshall',
};
