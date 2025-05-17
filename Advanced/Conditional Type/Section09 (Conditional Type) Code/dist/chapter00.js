/**
 * 조건부 타입 : 삼항 연산자와 extends를 이용해 조건에 따라 타입을 결정하는 문법
 *  - 타입1 extends 타입2 ? 타입A : 타입 B
 *  - extends 확장 키워드와 삼항 연산자를 사용해 특정 타입이 또 다른 타입을 확장하는지 조건 확인 후 타입 할당
 */
let varA; // string 타입
let varB; // number 타입
function removeSpaces(text) {
    // 💡 오버로딩하면, 함수 오버로드 시그니처를 따라가므로 타입 정의가 필요 없고, 매개변수 타입만 any로 지정 -> 구현 시그니처 내부에서 조건부 타입의 결과 추론 가능
    if (typeof text === "string") {
        // 첫 번째 인수에 해당하는 모든 문자를 찾아서 두 번째 인수로 변경
        return text.replaceAll(" ", "");
    }
    else {
        return undefined;
    }
}
let result = removeSpaces("Hi I'm SooyoungHan"); // string
result.toUpperCase();
let result2 = removeSpaces(undefined); // undefined
export {};
