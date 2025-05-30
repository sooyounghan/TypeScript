/**
 * 1. 제네릭 인터페이스 : 제네릭 함수와 동일하게 타입 변수 이용 - interface 인터페이스명<타입변수1, 타입변수2, ...>
 *    - 변수명 : 인터페이스명<타입1, 타입2, ...>
 */

// 타입 변수 = 타입 파라미터 = 제네릭 타입 변수 = 제네릭 타입 파라미터
interface KeyPair<K, V> {
  key: K;
  value: V;
}

// 💡 제네릭 인터페이스는 타입을 정의할 때, 반드시 할당할 타입을 직접 할당해줘야 함
let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

/**
 * 2. 제네릭 인터페이스는 객체의 인덱스 시그니처 문법과 사용하면 유연한 객체 타입 생성 가능
 *  - 인덱스 시그니처 : [key : 타입1] : 타입2(value)
 */
interface NumberMap {
  [key: string]: number; // 인덱스 시그니처 : key와 value의 타입에 관련된 규칙만 만족하면 어떤 객체든 허용하는 객체 타입을 만드는 문법
}

let numberMap1: NumberMap = {
  key: -1231,
  key2: 123123,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<String> = {
  key: "value",
};

let boolean: Map<Boolean> = {
  key: true,
};

/**
 * 3. 제네릭 타입 별칭
 *  - type 타입별칭명<타입변수>
 */

type Map2<V> = {
  [key: string]: V;
};

// 제네릭 타입 별칭도 직접 타입 변수에 할당할 타입을 직접 지정해줘야 함
let string: Map2<string> = {
  key: "hello",
};

/**
 * 4. 제네릭 인터페이스의 활용 예시
 */

/**
 * 유저 관리 프로그램
 *  - 유저 구분 : 학생 / 개발자 유저
 */
interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  const school = user.profile.school; // Student 타입
  console.log(`${school}로 등교 완료!`);
}

// goToSchool(developerUser); // 에러 발생

const developerUser: User<Developer> = {
  name: "한수영",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const studentUser: User<Student> = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "단국대학교",
  },
};
