/**
 * 1. 타입스크립트의 클래스
 */

const employee = {
  name: "한수영",
  age: 32,
  position: "devloper",

  work() {
    console.log("일하는 중");
  },
};

// 💡 자바스크립트 클래스로 취급이 되면서, 하나의 타입으로도 작용
class Employee {
  /**
   *   필드 : 추론할 수 없는 정보일 때, 암시적으로 any 타입이 할당 (안전하지 않으므로 경고 발생)
   *     - 필트 타입을 정의하더라도, 초기화 또는 생성자를 할당하지 않아서 문제 발생
   *     - 해결 방법
   *         + 선택적 프로퍼티 (?) 할당
   *         + 초기값 할당
   *         + 초기값을 할당하는 것이 아니라면, 생성자 생성
   */
  name: string; // 필드 타입 정의
  age: number; // 필드 타입 정의
  position: string; // 필드 타입 정의

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일하는 중");
  }
}

// employeeB : Employee
const employeeB = new Employee("한수영", 32, "개발자");
console.log(employeeB); // Employee { name: '한수영', age: 32, position: '개발자' }

// 클래스를 타입으로 사용 가능 : 타입스크립트는 구조적으로 타입을 결정하는 구조적 타입 시스템이므로, 클래스를 구조를 보고 타입 설정
const employeeC: Employee = {
  // Employee에서 정의한 필드, 메서드를 가져야 하는 객체 타입으로 정의

  name: "",
  age: 0,
  position: "",

  work() {},
};

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자 매개변수 일부 누락 시, 타입 오류 발생
  constructor(
    name: string,
    age: number,
    position: string,
    officialNumber: number
  ) {
    super(name, age, position); // 생략하면 오류 발생 (파생 클래스의 생성자는 super를 호출을 포함해야 함)
    this.officeNumber = officialNumber;
  }
}
