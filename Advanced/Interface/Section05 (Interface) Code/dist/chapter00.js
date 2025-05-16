const person = {
    name: "한수영",
    // 메서드 (Method) : 인터페이스에서 타입 정의 가능
    sayHi: function () {
        console.log("Hi");
    },
};
// person.name = "아무개"; // 오류
person.sayHi();
person.sayHi(1, 2); // 메서드 오버로딩
export {};
