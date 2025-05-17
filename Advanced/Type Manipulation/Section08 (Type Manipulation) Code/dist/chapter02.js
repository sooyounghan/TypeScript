// function getPropertyKey(person: Person, key: keyof person) { // 오류 발생
function getPropertyKey(person, key) {
    // key: string이라고하면, 모든 문자열의 값을 Person 객체의 key 값으로 볼 수 없으므로 반환값 부분 오류 발생
    // key: "name" | "age" 유니온 타입으로 지정하면, 프로퍼티가 많아질수록 문제 발생
    // key : keyof Person -> "name" | "age" (새로운 프로퍼티가 추가되더라도 자동으로 Union으로 추가)
    return person[key];
}
const person = {
    name: "한수영",
    age: 27,
};
getPropertyKey(person, "name"); // 한수영
const person2 = {
    name: "한수영",
    age: 27,
};
// typeof 연산자는 변수의 type을 추출하는 용도로 사용 가능 keyof typeof 객체명
function getPropertyKey2(person, key) {
    // typeof person : { name : string, age : number} -> keyof 적용 : "string" | "number" union type
    return person[key];
}
export {};
