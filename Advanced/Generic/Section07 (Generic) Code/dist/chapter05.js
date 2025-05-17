/**
 * 1. 프로미스
 *  - 프로미스는 resolve, reject를 호출해서 전달하는 비동기 작업의 결과값의 타입을 자동으로 추론하는 기능을 가지고 있지 않음 (따라서, unknown 타입으로 기본적으로 추론)
 *  - 따라서, 제네릭 사용
 *  - 타입스크립트에서 자바스크립트의 내장 클래스인 Promise는 제네릭 클래스로 타입이 별도로 선언 : interface Promise<T>
 *      + 생성자 : new <T>(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void): Promise<T>;
 *  - new Promise<타입>(...) 필요 > resolve의 타입도 해당 선언 타입으로 변경
 */
const promise = new Promise((resolve, reject) => {
    // 비동기 처리를 실제로 실행할 CallBack (매개변수 : resovle, reject)
    setTimeout(() => {
        // resolve(20); // 비동기 작업이 성공하면 호출하는 함수 (함수의 인수로 전달되는 값 : 비동기 작업의 결과)
        // reject는 비동기 작업이 실패하면 호출되는 함수 (인수로는 실패의 원인 / 이유)
        reject("실패"); // reason? : any 타입으로 정의 (인수 생략 또는 아무 타입이나 가능)
    }, 3000);
});
// then 메서드는 프로미스의 결과값을 이용
// 💡 response : unknown 타입으로 추정 -> number로 지정하여 number 타입으로 변경
promise.then((response) => {
    // response는 resolve에서 인수로 전달한 값이 들어오는 것 (여기서는 20)
    console.log(response * 10);
});
// 💡 err : reject의 인수로 받은 값 -> any 타입 (정확한 타입을 알 수 없고, 지정 불가)
promise.catch((err) => {
    // 따라서, 타입 좁히기 사용
    if (typeof err === "string") {
        console.log(err);
    }
});
// 💡 function fetchPost() : Promise<Post>() {  : 반환값 직접 설정 가능 (일반적으로 많이 사용하는 방식 - 함수의 반환값 타입을 우리가 직접 명시) => 협업 관점에서 함수 선언 부분만 보고 확인 가능
function fetchPost() {
    // Post 타입값 반환 : fetchPost() : Promise<Post> (Promise가 클래스이므로 타입으로도 활용 가능)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                title: "게시글 제목",
                content: "게시글 컨텐츠",
            });
        }, 3000);
    });
}
const postRequest = fetchPost();
postRequest.then((post) => {
    post.id; // 오류 발생 : unknown 타입 -> 타입을 Prmoise<Post>로 지정
});
export {};
