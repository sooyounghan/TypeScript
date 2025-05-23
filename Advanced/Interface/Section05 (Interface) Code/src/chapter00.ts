/**
 * 1. 인터페이스 : 객체 타입 정의에 특화
 *  - 타입 별칭과 타입 정의하는 문법만 조금 다를 뿐 전반적으로 동일
 *  - 선택적 프로퍼티는 ?를 붙이면 되며, readonly로 읽기전용 프로퍼티로 설정 가능
 *  - union이나 intersection 타입 불가하므로, 타입 별칭에서 활용해야 함
 *  - I(인터페이스)이름 지정 가능 : IPerson (헝가리안 표기법) - 자바스크립트 프로그래밍에서는 사용하지 않음(Snake 표기법, Camel 표기법 사용, Pascal 표기법 사용)
 */
interface Person {
  readonly name: string;
  age?: number;
  // sayHi : () => void; // 함수 타입 정의 (함수 표현식)
  sayHi(): void; // 호출 시그니처 (= () => {})를 지정할 때는 앞에 메서드명이 필요
  sayHi(a: number, b: number): void; // 오버로드 시그니처는 호출 시그니처로만 정의 가능
  // sayHi : (a:number, b:number) => void; // 함수 표현식은 불가
} // | number, & number : 불가

type Type1 = number | string | Person; // 가능
type Type2 = number & string & Person; // 가능

const person: Person = {
  name: "한수영",
  // 메서드 (Method) : 인터페이스에서 타입 정의 가능
  sayHi: function () {
    console.log("Hi");
  },
};

// person.name = "아무개"; // 오류
person.sayHi();
person.sayHi(1, 2); // 메서드 오버로딩
