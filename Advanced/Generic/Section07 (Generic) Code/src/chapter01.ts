/**
 * 1. 타입 변수 응용하기 - 첫 번째 사례
 */

// 매개변수 a와 b는 T로 할당 : 매개변수의 타입이 같아야 함
// 매개변수 타입이 서로 다를 때 : 서로 다른 타입 변수 할당
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2); // T : string, U : number

/**
 * 2. 타입 변수 응용하기 - 두 번째 사례
 */
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  // 💡 배열의 경우, 타입 변수를 사용하면 함수 호출 전 함수 내부에서는 어떠한 타입인지 알 수 없으므로 unknown으로 판단 : 이럴 경우, T[]의 경우 unknown[] 배열로 타입 판단하도록 설정 (객체, 튜플 타입도 사용 가능)
  // returnFirstValue([1, "hello", "mynameis"]); // T[] => number | string[] 이므로, number | string union 타입으로 반환 > 해결 방법 : 튜플로 만든 뒤, 첫 번째 요소 타입만 알면 되므로, 첫 번째 타입 요소를 T로 설정 후 그 다음 연산자는 타입을 알 필요가 없으므로 unknown으로 나머지 연산자 이용 - [T, ...unknown[]]
  return data[0]; // T의 타입을 가진 요소 반환
}

let num = returnFirstValue([0, 1, 2]); // 0

let str = returnFirstValue(["hello", "mynameis"]); // hello
let str2 = returnFirstValue([1, "hello", "mynameis"]); // T[]로 설정 : => number | string[] 이므로, number | string union 타입으로 반환 > [T, ...unknown[]로 설정 : number로 할당

/**
 * 3. 타입 변수 응용하기 - 세 번째 사례
 */
function getLength<T extends { length: number }>(data: T) {
  // 💡 타입 제한 : 함수 내부에서 T는 unknown이므로 length 프로퍼티가 없다고 판단하여 사용 불가하므로, T extends { length : number }로, 프로퍼티가 number 타입으로 확장하는 타입으로 이 T를 제한
  // 💡 즉, T는 확장할 타입인데, number 타입 length를 가지고 있는 객체로 확장하는 타입으로 T를 제한
  return data.length;
}

let var1 = getLength([1, 2, 3]); // 3 (배열 : length 프로퍼티 가지고 있음)

let var2 = getLength("12345"); // 5 (객체 : length 프로퍼티 가지고 있음)

let var3 = getLength({ length: 10 }); // 10

// let var4 = getLength(10); // 숫자값 인수 : 오류는 미 발생을 오류 발생으로 처리 > 타입 확장
