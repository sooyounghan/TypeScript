/**
 * keyof 연산자
 *  - 특정 객체 타입으로부터 프로퍼티 키들을 string 유니온 타입으로 추출
 *  - keyof 객체타입 : 해당 객체 타입으로부터 모든 프로퍼티의 키를 union 타입으로 추출
 *  - 💡 주의사항 : 무조건 타입에만 사용 가능
 *  - keyof 연산자는 typeof 연산자와 사용 가능 (type 타입별칭 = typeof 객체명)
 */
interface Person {
  name: string;
  age: number;
}

// function getPropertyKey(person: Person, key: keyof person) { // 오류 발생
function getPropertyKey(person: Person, key: keyof Person) {
  // key: string이라고하면, 모든 문자열의 값을 Person 객체의 key 값으로 볼 수 없으므로 반환값 부분 오류 발생
  // key: "name" | "age" 유니온 타입으로 지정하면, 프로퍼티가 많아질수록 문제 발생
  // key : keyof Person -> "name" | "age" (새로운 프로퍼티가 추가되더라도 자동으로 Union으로 추가)
  return person[key];
}

const person: Person = {
  name: "한수영",
  age: 27,
};

getPropertyKey(person, "name"); // 한수영

type Person2 = typeof person; // 타입스크립트 추론하는 Person의 타입으로 추론 (typeof 객체명), 즉 타입을 추론해서 타입 별칭에 정의

const person2 = {
  name: "한수영",
  age: 27,
};

// typeof 연산자는 변수의 type을 추출하는 용도로 사용 가능 keyof typeof 객체명
function getPropertyKey2(person: Person2, key: keyof typeof person) {
  // typeof person : { name : string, age : number} -> keyof 적용 : "string" | "number" union type
  return person[key];
}
