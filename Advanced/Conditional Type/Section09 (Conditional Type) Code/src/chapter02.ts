/**
 * infer - 조건부 타입 내 특정 타입 추론 (Inference의 약자 - 추론하다)
 */
type FuncA = () => string;
type FuncB = () => number;

// infer R (=R) : 참으로 만드는 타입을 추론하도록 동작
type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>; // string (() => string extends () => R이 참이 되기 위해 R이 string 타입으로 추론)
type B = ReturnType<FuncB>; // number (() => string extends () => R이 참이 되기 위해 R이 number 타입으로 추론)
type C = ReturnType<number>; // 💡 number extends () => R되기 위한 R은 무엇이 되도 불가하므로, 추론이 불가하여 조건식이 거짓이라 평가하여 never

/**
 * 예제
 */
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
/**
 * 조건
 *  - 1. T는 Promise 타입
 *  - 2. 프로미스 타입의 결과값 타입을 반환해야 함
 */

type PromiseA = PromiseUnpack<Promise<number>>; // Promise<number> extends Promise<R> 이 참이 되기 위한 조건 : R = number
type PromiseB = PromiseUnpack<Promise<string>>; // Promise<string> extends Promise<R> 이 참이 되기 위한 조건 : R = string
