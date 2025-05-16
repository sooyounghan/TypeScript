/**
 * 1. 사용자 정의 타입 가드
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
  // 반환값 타입으로 true를 반환하면 animal을 Dog 타입이라고 설정
  // animal을 Dog로 타입 단언 후 isBark가 undefined가 아닌지 확인
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warinig(animal: Animal) {
  // 타입스크립트는 직접 만든 함수의 반환값을 가지고 타입을 잘 좁히지 못하므로, 반환값 타입으로 true를 반환하면 animal을 Dog 타입이라고 설정
  if (isDog(animal)) {
    // 강아지
    animal;

    // 타입스크립트는 직접 만든 함수의 반환값을 가지고 타입을 잘 좁히지 못하므로, 반환값 타입으로 true를 반환하면 animal을 Cat 타입이라고 설정
  } else if (isCat(animal)) {
    // 고양이
    animal;
  }
}
