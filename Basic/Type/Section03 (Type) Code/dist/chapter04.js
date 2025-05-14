/*
    1. 대수 타입
        - 여러 개의 타입을 합성해서 새롭게 만들어낸 타입을 의미
        - 합집합 타입과 교집합 타입 존재
*/
/*
    2. 합집합 타입 - Union 타입
        - 타입 1 | 타입 2 (| : Union 기호) : 합집합은 무한히 가능
*/
let a; // a라는 변수는 string와 number의 합집합, union 타입으로 숫자, 문자열 가능 > string number union 타입
a = 1;
a = "hello";
let b;
b = true;
let arr = [1, "hello", true];
let union1 = {
    // Dog 타입
    name: "",
    color: "",
};
let union2 = {
    // Person 타입
    name: "",
    language: "",
};
let union3 = {
    // Dog와 Person의 프로퍼티를 모두 가지고 있으므로(name, color, language), 합집합에도 포함됨 : 두 프로퍼티 속성을 모두 가지면 교집합 타입 (Intersection Types)
    name: "",
    color: "",
    language: "",
};
/*
let union4 : Union1 = { // Dog와 Person의 공통된 부분(name)만 가지는 타입은 두 타입 모두 해당하지 않으므로, 오류 발생
    name:"",
}
*/
/*
    3. 교집합 타입 (Intersection Type)
        - 타입1 & 타입2 (교집합 타입)
        - & 연산자를 이용해 여러 개의 타입 간 교집합 타입을 만들 수 있음
        - 기본 타입을 가지고 Intersection Type을 만들면, 대부분 never(공집합) 타입 : 기본 타입 중에서는 공유 또는 겹치는 값이 없음
        - 객체 타입에서 많이 사용
*/
let variable; // number와 string은 교집합이 없으므로, never 타입 (공집합)
let intersection1 = {
    name: "",
    color: "",
    language: "",
};
export {};
