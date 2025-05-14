/*
    1. 기본 타입 간의 호환성 : 특정 타입을 다른 타입으로 판단해도 괜찮은지 판단
*/
let num1 = 10;
let num2 = 10;
num1 = num2; // Up-Casting
let animal = {
    name: "기린",
    color: "yellow",
};
let dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진돗개",
};
animal = dog;
let book;
let programmingBook = {
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
let book2 = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    // skill: "reacts", // 초기화 시 오류 발생 - 객체 리터럴
};
let book3 = programmingBook; // 객체 리터럴을 사용한 것이 아니므로 초과 프로퍼티 검사 미실시
// 함수의 매개변수 타입 설정 가능
function func(book) { }
// 함수의 인수로 객체를 전달할 때도 객체 리터럴을 전달하면 초과 프로퍼티 검사 발동하므로, 서브 타입을 객체를 넣으려하면, 변수에 저장 후 인수로 변수 전달
func({
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    // skill: "reacts", // 초기화 시 오류 발생 - 객체 리터럴
});
func(programmingBook); // 가능
export {};
