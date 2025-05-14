/*
    1. 타입 좁히기
        - 조건문 등을 이용해 넓은 타입에서 좁은 타입으로 타입을 상황에 따라 좁히는 방법
        - 타입 가드 (Type Guard) : typeof 연산자를 통해 조건문 내에서 어떤 변수가 특정 조건문 내부에서 더 좁은 타입임을 보장할 수 있을 때, 타입스크립트는 이 변수의 타입을 더 좁은 타입으로 자동 추론

    2. 대표적인 타입 가드 (Type Guard)
        - instanceof 연산자 : A instanceof B => A라는 값이 B 클래스의 instance인지 확인
            + B는 클래스이어야 함
        - in 연산자 : 프로퍼티 in 값 => 프로퍼티가 해당 값에 있는지 확인 (있다면 true, 없다면 false 반환)
            + in 뒤에는 null, undefined가 올 수 없으므로, 값 && 프로퍼티 in 값으로, && 연산자를 통해 값이 있음을 알려줘야 함함
*/

type Person = {
  name: string;
  age: number;
};

// value 타입에 따라, value === "number" : toFixed() 호출 / value === "string" : toUpperCase() / value === "Date" : getTime() / value === "Person" : name은 age살 입니다.
function func(value: number | string | Date | null | Person) {
  // Date 객체는 Node.js가 기본적으로 제공하는 내장 객체로, 타입들이 기본적으로 제공

  value; // number | string | Date | null | Person union 타입
  // value.toUpperCase(); // 에러
  // value.toFixed(); // 에러

  if (typeof value === "number") {
    // 타입 가드 (Type Guard)
    // value 타입 number 타입 추론
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    // 타입 가드 (Type Guard)
    // value 타입 string 타입 추론
    console.log(value.toUpperCase());
  } //else if (typeof value === "object") {
  else if (value instanceof Date) {
    // value === "object" 사용은 좋지 못함
    // typeof 연산자는 null 값에 typeof를 해도 똑같이 object 반환 (Date | null)
    // instance 연산자 이용하여 객체의 인스턴지인지 확인
    console.log(value.getTime());
  } else if (value && "age" in value) {
    // Person은 타입 (클래스가 아님)이고, 내장 객체가 아니므로 in 연산자 사용
    // in 연산자 뒤의 값에는 null, undefined가 올 수 없으므로 value가 있음을 && 연산자로 확인
    value; // person 타입
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}
