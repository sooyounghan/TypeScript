/**
 * 조건부 타입 : 삼항 연산자와 extends를 이용해 조건에 따라 타입을 결정하는 문법
 *  - 타입1 extends 타입2 ? 타입A : 타입 B
 *  - extends 확장 키워드와 삼항 연산자를 사용해 특정 타입이 또 다른 타입을 확장하는지 조건 확인 후 타입 할당
 */

// 1. 기본 타입
// A는 number 타입
type A = number extends string ? string : number; // number 타입이 string 타입을 확장하는 타입인지 확인 -> 맞으면 string, 아니라면 number

// 2. 객체 타입
// 슈퍼 타입
type ObjA = {
  a: number;
};

// 서브 타입
type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string; // number 타입

/**
 * 제네릭과 조건부 타입
 */

// T가 number 타입이라면 string 타입으로, string이라면 number 타입으로 변환
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>; // string 타입

let varB: StringNumberSwitch<string>; // number 타입

// 예제
// 함수 내부에서는 조건부 타입의 결과를 알 수 없음 (제네릭 타입 변수 T도 함수 내부에서는 unknown 타입이므로, 조건부 타입의 결과를 알 수 없는 것)
// 함수 오버로딩 사용
function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
  // 💡 오버로딩하면, 함수 오버로드 시그니처를 따라가므로 타입 정의가 필요 없고, 매개변수 타입만 any로 지정 -> 구현 시그니처 내부에서 조건부 타입의 결과 추론 가능
  if (typeof text === "string") {
    // 첫 번째 인수에 해당하는 모든 문자를 찾아서 두 번째 인수로 변경
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("Hi I'm SooyoungHan"); // string
result.toUpperCase();

let result2 = removeSpaces(undefined); // undefined
