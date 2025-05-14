/*
    1. 타입 단언 
        - 값 as 타입 (단언식) : 타입스크립트는 앞에 있는 값을 as 뒤의 타입이라고 간주하라고 알려주는 것
        - 값의 타입을 직접 단언하는 방법
*/
type Person = {
  name: string;
  age: number;
};

let person = {} as Person; // 초기화 값을 단언
// 빈 객체로 생성 후, name과 age 프로퍼티를 추가하려하면 에러 발생 : person 변수의 타입이 초기화 값인 빈 객체를 기준으로 추론되어 버리므로 person 변수의 타입은 빈 객체가 됨
person.name = "한수영";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진돗개", // 초과 프로퍼티 검사 발동
} as Dog; // 추가 프로퍼티를 넣어야 하는 경우 타입 단언으로 해결 가능 (타입 추론 가능)

/*
    2. 💡 타입 단언 규칙
        - 값 as 타입 (단언식) : A as B 
        - A가 B의 슈퍼타입 : B로 단언하더라도 B라는 부분이 겹치므로 오류 발생 가능성이 적으므로 가능
        - A가 B의 서브타입 : A로 단언하더라도 A라는 부분이 겹치므로 오류 발생 가능성이 적으므로 가능
        - 서로소 집합의 경우 겹치는 부분이 없으므로 오류 발생 가능성이 높으므로 불가
*/

let num1 = 10 as never; // number(슈퍼타입) - never(서브타입)
let num2 = 10 as unknown; // number(서브타입) - unknown(슈퍼타입)

// let num3 = 10 as string; // 오류 발생 : number - string 은 서로 교집합이 없으므로 서로 슈퍼-서브 타입이 아님

// 해결 방법 (좋은 방법은 아님) - 다중 단언
let num3 = 10 as unknown as string; // number(서브타입) - unknown(슈퍼타입) -> unknown(슈퍼타입) - string(서브타입) : 다중 단언

/*
    3. const 단언 
        - A as const : const로 선언한 것과 동일한 효과를 보여줌
        - 객체 타입과 함께 사용하면 활용 가능
            + 객체 변수 선언 후 as const를 하면 해당 프로퍼티들이 readonly, 읽기 전용 프로퍼티로 변하여 읽기 전용 객체로 추론
*/
let num4 = 10 as const; // number literal 타입 10으로 추론

let cat = {
  name: "야옹이",
  color: "yellow",
} as const; // readonly 프로퍼티

// cat.name = "수정이"; // 변경 불가

/*
    4. Non null 단언
        - 어떤 값이 null이거나 undefined이 아니라고 타입 스크립트 컴파일러에게 단언
*/
type Post = {
  title: string;
  author?: string; // 익명으로 사용한다면 없을 수 있음 (선택적 프로퍼티로 설정)
};

let post: Post = {
  title: "게시글",
  author: "한수영",
};

// Optional Chainning을 이용하면 사용 불가
// const len : number = post.author?.length; // 자동으로 ? 키워드 추가 (자바스크립트에서 제공하는 Optional Chainning : null이거나 undefined인 경우 점 표기법으로 접근하면 오류가 발생하므로, author 프로퍼티가 없으면 이 값 전체를 undefined으로 처리)
const len: number = post.author!.length; // ! : Non null 단언 연산자 (해당 값이 null이거나 undefined이 아닐 것이라고 타입 컴파일러에게 단언 (string 타입으로 단언))
