/**
 * Exclude<T, U>
 *  - Exclude : 제외하다, 추방하다
 *  - T에서 U를 제거
 */

type Exclude<T, U> = T extends U ? never : T;
// Exclude<string, boolean> : string
// Exclude<boolean, boolean> : never
// string | never = string
type A = Exclude<string | boolean, boolean>; // string

/**
 * Extract<T, U>
 *  - T에서 U를 추출
 */

type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | boolean, boolean>; // boolean

/**
 * ReturnType<T>
 *  - 함수의 반환값 타입을 추출하는 타입
 */

// 어떤 함수 타입이 들어와도 서브 타입
type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;

function funcA() {
  return "hello";
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>; // () => string 임을 만족하는 서브타입 R : string
type ReturnB = ReturnType<typeof funcB>; // () => number 임을 만족하는 서브타입 R : number
