/*
    1. Enum 타입 : 열거형 타입
        - 여러가지 값들에 각 이름을 부여해 열거해두고 사용하는 타입
        - enum 열거형 이름 {
            멤버1 = 값1,
            멤버2 = 값2,
            멤버3 = 값3,
            ...
          }
        - 지정 : 열거형.멤버
        - 숫자형 Enum : 멤버의 값이 숫자가 할당되는 Enum
            + 숫자를 지정하지 않으면면 맨 위부터 0, 1, 2, ... 숫자 할당
            + 맨 위에 숫자를 할당하면, 아래 값은 +1 씩 증가하면서 할당
            + 중간에 할당하면, 중간 이후 값부터 +1 씩 증가하면서 할당

        - 문자형 Enum : 멤버의 값이 문자가 할당되는 Enum
    
    2. Enum은 컴파일 결과가 사라지지 않음 : 자바스크립트의 객체로 변환
*/

enum Role {
  ADMIN, // 0
  USER = 10,
  GUEST, // 11
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "한수영",
  role: Role.ADMIN, // 0 : 관리자
  language: Language.korean,
};

const user2 = {
  name: "홍길동",
  role: Role.USER, // 10 : 일반 유저
};

const user3 = {
  name: "아무개",
  role: Role.GUEST, // 11 : Guest
};

console.log(user1, user2, user3); // { name: '한수영', role: 0, language: 'ko' } { name: '홍길동', role: 10 } { name: '아무개', role: 11 }
