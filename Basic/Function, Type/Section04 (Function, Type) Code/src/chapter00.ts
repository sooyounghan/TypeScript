/*
    1. 함수 타입 정의
*/
// 함수를 설명하는 가장 좋은 방법 : 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 설명
// 타입스크립트 : 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 설명
function func(a: number, b: number): number {
  // 반환 값 기준으로 추론하므로 생략 가능
  return a + b;
}

/**
 * 2. 화살표 함수 타입 정의 : 일반적인 함수 선언식과 동일 (반환 값 기준으로 추론하므로 생략 가능)
 */
const add = (a: number, b: number): number => a + b;

/**
 * 3. 함수의 매개변수 : 기본값을 설정하면, 매개변수 타입 지정하지 않아도 오류 발생하지 않음
 *  - 주의사항
 *      + 기본값과 다른 타입으로 정의하면, 오류 발생
 *      + 매개변수? : 선택적 매개변수 (타입 | undefined)의 union 타입
 *      + 선택적 매개변수는 필수 매개변수들 앞에 오면 안 됨 (필수 매개변수는 앞에 위치)
 */
function introduce(name: string = "한수영", age: number, tall?: number) {
  // name은 선택적 매개변수, tall은 선택적 매개변수
  console.log(`name : ${name}`);
  // console.log(`tall : ${tall + 10}`); // 오류 발생 : tall은 number | undefined이므로, 오류
  // 조건문 사용
  if (typeof tall === "number") {
    console.log(`tall : ${tall + 10}`);
  }
}

// introduce(1); // 다른 타입으로 정의하면 오류 발생
introduce("한수영", 27, 184);
introduce("한수영", 27); // tall 매개변수 생략하면 오류 발생

/**
 * 4. Rest 연산자 이용 : 타입 지정 필요 (타입[])
 *  - 매개변수 갯수 지정 : 튜플 타입으로 지정 -> [number, number, number] : 3개만 매개변수를 받음
 */
function getSum(...rest: number[]) {
  let sum = 0;

  rest.forEach((it) => (sum += it));
}

getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4, 5); // 15
