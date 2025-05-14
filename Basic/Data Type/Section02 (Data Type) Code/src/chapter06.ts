/*
    1. any (모든, 누구나)
        - 특정 변수의 타입을 확실히 모를 때 사용 가능
        - 변수명 : any = 값(타입 상관 없음)
        - 자바스크립트 변수 사용하듯이 메서드도 가능
        - 💡 모든 타입의 값을 다 할당받을 수 있으며, 역으로 모든 타입의 변수에 any Type의 값을 대입 가능
        - 타입 검사를 다 통과하지만, 런타임 시에 오류가 발생하는 런타임 에러 발생하는 최악의 단점 존재
*/
let anyVar: any = 10;
// anyVar = "hello";
// anyVar = true;
// anyVar = {}; // 객체 가능
// anyVar = () => {}; // 함수 가능

// 메서드도 가능
// anyVar.toUpperCase();
// anyVar.toFixed();

let num: number = 10; // number로 타입 지정
num = anyVar; // 문제가 되지 않음 (타입 오류 X)

/*
    2. unknown 타입
        - 변수에 어떠한 타입이 들어올 지 모를 때 사용
        - 💡 any와 다르게, 모든 타입의 값을 다 할당받을 수 있지만, 역으로 모든 타입의 변수에 unknown Type의 값을 대입 불가능
        - 따라서, any 타입보다 안전함
*/
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar; // 오류 발생
// unknownVar.toUpperCase(); // 메서드 사용 시 오류 발생, 연산도 오류 발생

// 타입 정제, 타입 좁히기 : unknown 타입의 값을 활용하고 싶다면, 조건문에 typeof 연산자 이용하여, unknown 변수가 확실하게 그 타입임을 밝혀주었을 때만 사용 가능
if (typeof unknownVar === "number") {
  num = unknownVar; // 가능
}
