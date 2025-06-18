let user1 = 'marshall';

let user2: string | number;
user2 = 3;
user2 = '4';

// 커스텀 타입: 직접 만든 타입(type, interface)

type job = 'designer' | 'developer' | 'teacher'; // job 종류 한정, 유니온 타입

interface User {
  name: string;
  job: job;
}

const user3: User = {
  name: 'marshall',
  job: 'developer',
};

interface studentScore {
  name: string;
  grade: 1 | 2 | 3;
}

const aStudent: studentScore = {
  name: 'marshall',
  grade: 3,
};

// 함수를 포함한 인터페이스
interface Bag {
  name: 'bag';
  color: string;
  open(): void;
}

interface Mobile {
  name: 'mobile';
  color: string;
  call(): void;
}

// 유니온 타입으로 인터페이스를 정의
function getGift(gift: Bag | Mobile) {
  console.log(gift.color);
  if (gift.name === 'bag') {
    gift.open();
  } else {
    gift.call();
  }
}

getGift({
  name: 'mobile',
  color: 'red',
  call: () => {
    console.log('call');
  },
});

// 교차 타입 : 여러 타입을 합쳐서 사용. & 연산자 사용
interface Bag1 {
  name: string;
  open(): void;
}

interface Mobile1 {
  name: String;
  color: string;
  price: number;
}

const bagMobile: Bag1 & Mobile1 = {
  name: 'marshall',
  color: 'red',
  price: 2000,
  open() {},
};
