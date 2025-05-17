/**
 * 1. 제네릭 인터페이스 : 제네릭 함수와 동일하게 타입 변수 이용 - interface 인터페이스명<타입변수1, 타입변수2, ...>
 *    - 변수명 : 인터페이스명<타입1, 타입2, ...>
 */
// 💡 제네릭 인터페이스는 타입을 정의할 때, 반드시 할당할 타입을 직접 할당해줘야 함
let keyPair = {
    key: "key",
    value: 0,
};
let keyPair2 = {
    key: true,
    value: ["1"],
};
let numberMap1 = {
    key: -1231,
    key2: 123123,
};
let stringMap = {
    key: "value",
};
let boolean = {
    key: true,
};
// 제네릭 타입 별칭도 직접 타입 변수에 할당할 타입을 직접 지정해줘야 함
let string = {
    key: "hello",
};
function goToSchool(user) {
    const school = user.profile.school; // Student 타입
    console.log(`${school}로 등교 완료!`);
}
// goToSchool(developerUser); // 에러 발생
const developerUser = {
    name: "한수영",
    profile: {
        type: "developer",
        skill: "TypeScript",
    },
};
const studentUser = {
    name: "홍길동",
    profile: {
        type: "student",
        school: "단국대학교",
    },
};
export {};
