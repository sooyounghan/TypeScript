/**
 * 1. 함수 타입 표현식 (Function Type Expression)
 *  - 매개 변수 갯수를 추가하면 오류 발생하므로, 매개변수 타입과 개수를 맞춰야 함
 */
// const add : (a: number, b:number) => number = (a, b, c) => a + b; // 오류 발생
const add = (a, b) => a + b; // 타입 별칭 미사용
const sub = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const add2 = (a, b) => a + b; // 타입 별칭 미사용
const sub2 = (a, b) => a - b;
const multiply2 = (a, b) => a * b;
const divide2 = (a, b) => a / b;
add2.name; // 가능
export {};
