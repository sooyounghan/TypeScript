/**
 * 1. map 메서드 타입 정의하기
 */
const arr = [1, 2, 3];
// 자동으로 매개변수 타입 설정 : number (lib.es5.d.ts : 자바스크립트 내장 함수의 타입들이 선언된 파일)
const newArr = arr.map((it) => it * 2); // [2, 4, 6];
function map(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}
map(arr, (it) => it * 2);
map(["Hi", "Hello"], (it) => it.toUpperCase());
// map(["Hi", "Hello"], (it) => it.parseInt()); // parseInt(it) 에러 발생 : 콜백 함수의 반환값이 number 타입이 되어버림 (arr 매개변수의 값은 string이고, 반환값도 string이어야 하는데 parseInt()는 number 타입이 되어 매치 불가)
// 따라서, 반환 타입 별도 설정 필요 (U로 별도 타입을 선언하여 반환값이 number일 때, U로 반환되도록 설정)
/**
 * 2. forEach 메서드 타입 정의 하기
 */
const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));
function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}
forEach(arr2, (it) => {
    console.log(it.toFixed()); // number 타입
});
forEach(["123, 456"], (it) => {
    it; // string 타입
});
export {};
