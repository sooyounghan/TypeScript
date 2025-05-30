/**
 * 1. 접근 제어자 (Access Modifier)
 *  - 클래스를 생성할 때, 필드나 메서드에 접근할 수 있는 범위
 *  - public, private, protected 존재
 *  - 객체 지향 프로그래밍에서는 은닉화를 통해 클래스의 객체에 대한 프로퍼티를 외부에서 수정할 수 없도록 막는 것이 일반적 (수정으로 인해 다른 메서드들이나 클래스까지 영향을 미칠 수 있음)
 */

class Employee {
  // 접근제어자의 기본 값 : public
  // private로 설정하면, 클래스 외부에서는 접근 불가 (읽을 수도 없음)
  // protected로 설정하면, 외부에서는 접근 불가하지만, 파생 클래스까지 허용
  // private name: string;
  // private age: number;
  // private position: string;

  // 💡 접근자는 생성자의 매개변수에 설정 가능하나, 각 식별자가 중복되었다는 오류 발생 : 생성자 매개변수들의 접근 제어자를 설정하면 자동으로 필드를 생성 (따라서, 이 경우에는 필드 정의는 생략해야 함)
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {}

  work() {
    console.log(`${this.name} 일하는 중`); // 접근 : 템플릿 리터럴을 통해 접근 가능
  }
}

const employee = new Employee("한수영", 32, "developer");
// employee.name = "홍길동";
// employee.age = 32;
// employee.work = "Designer";

class ExecutiveOfficer extends Employee {
  // private을 정의된 필드는 파생 클래스에서도 사용 불가
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officialNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officialNumber;
  }

  // 메서드
  func() {
    // this.name; // 오류 발생 (private일 시, protected는 가능)
  }
}

console.log(employee); // Employee { name: '한수영', age: 32, position: 'developer' }
