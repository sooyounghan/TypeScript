/*
    1. 기본 타입 간의 호환성 : 특정 타입을 다른 타입으로 판단해도 괜찮은지 판단
*/
let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // Up-Casting
// num2 = num1; // 오류 (Down-Casting)

/*
    2. 객체 타입 간의 호환성 : 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은지 판단
        - 객체 타입도 슈퍼 타입 - 서브 타입 관계를 가짐
        - 프로퍼티를 기준으로 가짐 (객체 : 구조적 타입 시스템)
        - Animal (슈퍼타입) - Dog (서브타입)
        - 프로퍼티가 더 적은 타입이 슈퍼타입, 더 많은 타입이 서브 타입 (단, 공통 프로퍼티를 슈퍼 타입이 모두 가지고 있어야 함)
*/
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string; // Animal 타입이 가지고 있는 속성
  color: string; // Animal 타입이 가지고 있는 속성
  breed: string; // 추가 프로퍼티
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진돗개",
};

animal = dog;
// dog = animal; // Down-Casting (오류)

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reacts",
};

book = programmingBook;
// programmingBook = book; // Down-Casting (오류)

/*
    3. 초과 프로퍼티 검사 : 변수를 초기화할 때, 초기화하는 값으로 객체 리터럴을 사용하면 발동하는 검사
        - 실제 객체에 정의하지 않은 프로퍼티를 작성하지 않도록 검사하는 것
*/
let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reacts", // 초기화 시 오류 발생 - 객체 리터럴
};

let book3: Book = programmingBook; // 객체 리터럴을 사용한 것이 아니므로 초과 프로퍼티 검사 미실시

// 함수의 매개변수 타입 설정 가능
function func(book: Book) {}

// 함수의 인수로 객체를 전달할 때도 객체 리터럴을 전달하면 초과 프로퍼티 검사 발동하므로, 서브 타입을 객체를 넣으려하면, 변수에 저장 후 인수로 변수 전달
func({
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reacts", // 초기화 시 오류 발생 - 객체 리터럴
});

func(programmingBook); // 가능
