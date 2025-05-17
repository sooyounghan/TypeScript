// 한 명의 유저 정보를 불러오는 기능
function fetchUser() {
    // ... 기능
    return {
        id: 1,
        name: "한수영",
        age: 32,
    };
}
// 한 명의 유저 정보를 수정하는 기능 (선택적으로 수정할 프로퍼티만 매개변수로 보내고 싶음) -> 선택적 매개변수로 설정한 PartialUser 설정하면, 원하는 프로퍼티만 전송 가능
function updateUser(user) {
    // ... 수정하는 기능
}
updateUser({
    age: 30,
});
export {};
