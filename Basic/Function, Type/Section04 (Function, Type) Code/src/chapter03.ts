/**
 * 1. 함수 오버로딩
 *  - 하나의 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 만드는 문법
 *  - 구현부 없이 선언부만 작성 : 오버로드 시그니처
 *  - 실제 구현부 작성 : 구현 시그니처
 *  - 함수를 호출 할 때, 오버로드 시그니처의 버전을 따라감
 */
// 하나의 함수 func의 매개변수 타입은 number
// - 매개변수가 1개 있을 때에는, 20을 곱한 값 출력
// - 매개변수가 3개라면, 매개변수들을 다 더한 값을 출력

// 구현부 없이 선언부만 작성 : 오버로드 시그니처
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 작성 : 구현 시그니처 (선택적 프로퍼티로 처리해야함)
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a + 20);
  }
}

// func(); // 오류
func(1);
// func(1, 2); // 오류
func(1, 2, 3);
