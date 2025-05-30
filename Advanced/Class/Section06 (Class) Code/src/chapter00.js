/**
 * 1. 자바스크립트의 클래스
 *  - 똑같은 모양의 객체을 만들어내는 틀 (틀 : 객체, 붕어빵 : 클래스)
 *  - class 클래스명 { } : 클래스명의 앞글자는 대문자 (Pascal 표기법)
 */
let studentA = {
  name: "한수영",
  grade: "A+",
  age: 32,

  // 객체 내 메서드는 프로퍼티로 취급
  study() {
    console.log("열심히 공부함");
  },

  introduce() {
    console.log("안녕하세요!");
  },
};

class Studnent {
  // 필드 : 해당 클래스에서 생성된 객체는 아래 3개의 필드를 가짐
  name;
  grade;
  age;

  // 생성자 : 클래스를 객체로 생성하는 메서드 (메서드 형태)
  constructor(name, grade, age) {
    // 필드를 매개변수로 받음 (this : 생성하고 있는 객체를 의미)
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("열심히 공부함");
  }

  introduce() {
    console.log(`안녕하세요! ${this.name}입니다.`);
  }
}

// 인스턴스 : 클래스를 이용해서 만든 객체 (Student 인스턴스)
let studenB = new Studnent("한수영", "A+", 32); // 클래스 생성 : new 클래스명(생성자의 매개변수1, 매개변수2, ...); (new를 호출하면, 생성자 호출)
console.log(studenB); // Studnent { name: '한수영', grade: 'A+', age: 32 }
studenB.study(); // 열심히 공부함
studenB.introduce(); // 안녕하세요! 한수영입니다!

/**
 * 2. 클래스의 상속 : class 클래스명 extends 클래스명
 */
class StudentDevleoper extends Studnent {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age); // super() : 부모 클래스, 상속을 해주는 클래스의 생성자 호출
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍`);
  }
}

const studentDeveloper = new StudentDevleoper("한수영", "B+", 32, "TypeScript");
console.log(studentDeveloper); // StudentDevleoper {  name: '한수영',  grade: 'B+',  age: 32,  favoriteSkill: 'TypeScript' }
studentDeveloper.programming(); // TypeScript로 프로그래밍
