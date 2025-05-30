/*
    1. 타입 별칭 (Type Alias)
        - 유저 수가 많아질수록 코드 중복 및 코드 길이가 길어짐
        - 정의 : type 타입별칭명 = {
             프로퍼티1 : 타입1
             프로퍼티2 : 타입2
             ...
          }
        - 사용 : 변수명 : 타입별칭명

    2. 주의사항
        - 동일한 스코프에 타입 별칭을 선언하면 오류 발생
        - TSC 컴파일 이후, 자바스크립트 파일로 컴파일 될 때, 타입 관련 코드는 삭제되므로 제거
*/
// type User = { ... } // 오류 발생
let user = {
    id: 1,
    name: "한수영",
    nickname: "1_swim",
    birth: "1994-02-11",
    bio: "안녕하세요",
    location: "오산시",
};
let countryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
};
let countryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826,
};
export {};
/*
    4. 인덱스 시그니처 주의사항
       - A. 인덱스 시그니처는 규칙을 위반하지 않으면 모든 객체를 허용
       - B. 따라서, 정의할 때 해당 타입의 프로퍼티가 있어야 한다면 지정
       - C. 인덕스 시그니처를 사용하는 어떤 객체 타입에서 추가적 프로퍼티를 이런식으로 정의하려면, Value의 타입이 인덱스 시그니처의 Value 타입과 일치하거나 호환되어야함
*/
// let countryNumberCodes:CountryNumberCodes = {}; // A. 오류 미발생
// let countryNumberCodes2:CountryNumberCodes = {}; // B. 오류 발생
// let countryNumberCodes2:CountryNumberCodes = { Korea: "ko" }; // C. 오류 발생
