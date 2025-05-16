/**
 * 1. 인터페이스 확장
 *  - interface 서브타입 extends 슈퍼타입
 *  - 확장, 상속 : extends를 이용해 다른 인터페이스로부터 가지고 있는 모든 프로퍼티를 해당 인터페이스가 자동으로 다 포함해주도록 하는 문법
 *  - 상속을 받는 인터페이스에서 동일한 프로퍼티 타입을 다시 정의할 수 있음 (단, 타입이 원본 타입의 서브 타입이어야 함)
 *  - 타입 별칭이더라도, 확장 가능
 *  - 타입스크립트의 인터페이스는 유연하게 타입을 확장해서 사용할 수 있는 문법을 제공하므로 객체 타입을 다룰 때 유용하게 사용 가능
 */

interface Animal {
  name: string;
  color: string;
}

/*
type Animal = {
  name: string;
  color: string;
} : 가능
*/

interface Dog extends Animal {
  // name: number; // 오류 발생
  // name: "Dog"; // String Literal 타입으로 할당 가능
  isBark: boolean;
}

const dog: Dog = {
  name: "",
  color: "",
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

/**
 * 2. 다중 확장
 *  - 하나의 객체 타입이 아닌 여러 인터페이스를 확장받는 것
 */
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
};
