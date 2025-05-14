/*
    1.  number 타입 : 숫자를 의미하며, 자바스크립트에서 숫자를 의미하는 모든 값을 다 포함하는 타입
*/
let num1 = 123; // 변수: 타입 으로 설정 (:타입 - 타입 주석 (Type Annotation))
let num2 = -123; // 음수도 가능
let num3 = 0.123; // 소수도 가능
let num4 = -0.123; // 음의 소수도 가능
let num5 = Infinity; // Infinity (양의 무한대) 가능
let num6 = -Infinity; // 음의 무한대 가능
let num7 = NaN; // Not A Number도 가능
num1 = 1234; // 숫자만 가능
num1.toFixed(); // 숫자에만 적용할 수 있는, 즉 넘버 타입의 값에만 적용할 수 있는 메서드 적용 가능
// num1 = "abc"; // 오류 발생
// num1.toUpperCase(); // 문자열에만 적용할 수 있는 문자열 적용 메서드 사용 불가
/*
    2. string 타입 : "", '', ``, Template Literal로 만든 문자열 모두 포함
*/
let str1 = "hello";
let str2 = "hello";
let str3 = `hello`;
let str4 = `hello ${num1}`;
// str1 = 123; // 오류 발생
// str1.toFixed(); // 오류 발생
str1.toUpperCase(); // 문자열 관련 메서드 가능
/*
    3. boolean 타입 : 참과 거짓만을 저장하는 타입 (true, false)
*/
let bool1 = true;
let bool2 = false;
/*
    4. null 타입 : null 값 외의 다른 값을 담을 수 없는 타입
*/
let null1 = null;
// let null2 : null = 1; // 에러 발생
/*
    5. undefined 타입
*/
let unde1 = undefined;
/*
    6. 💡 타입스크립트에서는 넣을 값이 없으면 null을 넣는 것이 허용되지 않음 (null은 null 타입이 별도로 존재하고 number 타입에 포함되지 않음)
        - 컴파일 옵션 조정 가능 : tsconfig.json에서 "strictNullChecks" 옵션을 false로 설정 (엄격한 Null 검사 옵션)
        - strict 옵션은 strictNullChecks의 상위 옵션 (strict 옵션이 켜지면, 하위 옵션도 켜지는 형식), 하위 옵션을 별도로 설정 가능
*/
// let numA : number = null; // 에러 ("strictNullChecks": true)
// let numA : number = null; // 에러 X ("strictNullChecks": false)
/*
    7. literal : 딱 하나의 값만 포함 (값 그 자체가 타입이 됨) / 리터럴 = 값이라는 뜻
        - 숫자, 문자열, boolean 등 리터럴 가능
*/
let numA = 10; // 정의된 10이라는 값 외에 다른 값을 넣을 수 없음
let strA = "hello"; // 문자열 가능
let boolA = true;
export {};
