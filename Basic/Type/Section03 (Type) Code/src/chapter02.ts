/*
    1. unknown 타입 : 전체 집합 (모든 타입의 슈퍼 타입)
*/
function unknownExam() {
  let a: unknown = 1; // Up-Casting
  let b: unknown = "hello"; // Up-Casting
  let c: unknown = true; // Up-Casting
  let d: unknown = null; // Up-Casting
  let e: unknown = undefined; // Up-Casting

  let unknownVar: unknown;

  // let num : number = unknownVar; // Down-Casting : 오류 발생
  // let str : string = unknownVar; // Down-Casting : 오류 발생
  // let bool : boolean = unknownVar; // Down-Casting : 오류 발생
}

/*
    2. never 타입 : 가장 아래 위치한, 모든 타입의 서브 타입으로, 모든 집합의 부분 집합 (공집합)
        - 어떠한 값도 저장되서는 안 될 변수의 타입으로 활용용
*/
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc(); // Up-Casting
  let str: string = neverFunc(); // Up-Casting
  let bool: boolean = neverFunc(); // Up-Casting

  // let never1 : never = 10; // Down-Casting : 오류 발생
  // let never2 : never = "string"; // Down-Casting : 오류 발생
  // let never3 : never = true; // Down-Casting : 오류 발생
}

/*
    3. void 타입
*/
function voidExam() {
  function voidFunc(): void {
    console.log("Hi!");
    return undefined; // Up-Casting
  }

  let voidVar: void = undefined; // Up-Casting
}

/*
    4. any 타입 : 모든 타입의 슈퍼 타입이자, 모든 타입의 서브 타입으로 위치 (never 제외)
        - 💡 any 타입은 unknown 타입으로 Down-Casting 가능, undefined 타입은 any 타입으로 Down-Casting 가능
        - any 타입은 자신에게 한정 Up-Casting, Down-Casting 가능
        - 💡 단, never 타입은 정말 순수한 공집합이므로 Down-Casting 불가가
*/
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar; // Down-Casting이지만, any 타입 한정 가능

  undefinedVar = anyVar; // Down-Casting이지만, any 타입 한정 가능

  //neverVar = anyVar; // 불가능 (Down-Casting)
}
