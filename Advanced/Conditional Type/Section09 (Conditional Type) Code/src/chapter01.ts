/**
 * 분산적인 조건부 타입
 *  - 조건부 타입을 Union과 함께 사용할 때, 조건부 타입이 분산적으로 동작하게 작동하는 문법
 *  - 💡 1단계 : 타입 변수에 Union 타입이 할당되면, 그대로 대입되는 것이 아니라, Union 안에 속한 타입들이 각 전달
 *  - 💡 2단계 : 1단계의 결과들을 Union으로 묶음
 *  - 분산적인 조건부 타입 방지 : [T] extends [U] : 각 타입 변수 또는 타입에 [] 사용
 */

// type StringNumberSwitch<T> = [T] extends [number] ? string : number; // <boolean | number | string> extends <number> => false => number
// let e: StringNumberSwitch<boolean | number | string>; // number
type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>; // string
let b: StringNumberSwitch<string>; // number

let c: StringNumberSwitch<number | string>; // 한 번은 number로 전달 -> string, 한 번은 string으로 전달 -> number => 이후 Union, <string | number> 타입

let d: StringNumberSwitch<boolean | number | string>; // boolean -> number, number -> string, string -> number => <number | string>

/**
 * 실용적인 예제
 */

// 1. 분산적인 조건부 타입을 이용해 특정 유니온 타입으로부터 특정 타입만 제거 가능
// T가 U를 확장한 타입이면 never, 아니라면 U 타입 반환 (즉, T가 U의 서브 타입이라면 never 타입을 반환, 아니라면 타입 T를 반환)
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>; // number | boolean
/**
 * 0단계 : 구조 -> number | string | boolean 과 string
 * 1단계
 *  - Exclude<number | string>
 *  - Exclude<string | string>
 *  - Exclude<boolean | string>
 * 2단계
 *  - Exclude<number | string> : number
 *  - Exclude<string | string> : never
 *  - Exclude<boolean | string> : boolean
 *
 * 3단계 : number | never | boolean ( Union에서 never가 존재하면 사라짐 (never는 공집합)) : number | boolean
 *
 * => 💡 Exclude 조건부 타입을 만들면, T와 U가 같을 때 never를 반환하게 하여 타입을 삭제
 * => 💡 T와 U가 다를 때, T 그대로를 반환해서 그 타입을 반환하게 함
 * => 분산적인 조건부 타입을 이용해 특정 유니온 타입으로부터 특정 타입만 제거 가능
 */

// 2. 분산적인 조건부 타입을 이용해 특정 유니온 타입으로부터 특정 타입만 추출 가능
type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>; // string
/**
 * 0단계 : 구조 -> number | string | boolean 과 string
 * 1단계
 *  - Exclude<number | string>
 *  - Exclude<string | string>
 *  - Exclude<boolean | string>
 * 2단계
 *  - Exclude<number | string> : never
 *  - Exclude<string | string> : string
 *  - Exclude<boolean | string> : never
 *
 * 3단계 : never | string | never ( Union에서 never가 존재하면 사라짐 (never는 공집합)) : string
 *
 * => 💡 Extract 조건부 타입을 만들면, T와 U가 다를 때 never를 반환하게 하여 타입을 삭제
 * => 💡 T와 U가 같을 때, T 그대로를 반환해서 그 타입을 반환하게 함
 * => 분산적인 조건부 타입을 이용해 특정 유니온 타입으로부터 특정 타입만 추출 가능
 */
