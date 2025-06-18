// generic은 클래스나 함수, 인터페이스를 다양한 타입으로 재사용할 수 있도록 해준다.

// function getArray(arr: number[] | string[] | boolean[]): number {
//   return arr.length;
// }

function getArray<T>(arr: T[]): number {
  return arr.length;
}

console.log(getArray<number>([1, 2, 3]));
console.log(getArray<string>(['1', '2', '3']));
console.log(getArray<boolean>([true, false, false]));

// 인터페이스를 사용한 제네릭
interface MyCar5<T> {
  name: string;
  price: number;
  option: T;
}

const m1: MyCar5<object> = {
  name: 'my car',
  price: 1000,
  option: {
    color: 'red',
    wheels: 4,
  },
};

const m2: MyCar5<string> = {
  name: 'my car',
  price: 1000,
  option: 'sun roof',
};
