/*
    1. void : 공허라는 뜻으로, 아무것도 없다
        - 아무것도 없음을 의미
        - void로 지정한 변수는 어떠한 값도 담을 수 없으며 오직 undefined만 가능 
            + tsconfig.json에서 "strictNullChecks": false로 설정하면, 변수에 null 가능
        - 함수의 반환값을 undefined으로 설정하면 오류 발생 (함수의 반환값을 undefined으로 지정하면 반환값이 꼭 undefined을 반환해야 함 - return ;)
        - 마찬가지로, null도 동일 (return null;)
        - return문을 사용하고 싶지않다면, void 사용
*/

// 타입스크립트는 함수의 반환 값에도 타입 지정 가능 - function 함수명():반환타입 { ... }
function func1(): string {
  return "Hello";
}

// 반환값이 없을 경우, 반환타입을 void로 지정
function func2(): void {
  console.log("Hello");
}

let a: void;
// a = 1;
// a = "hello";
// a = {};
a = undefined;
// a = null; //  tsconfig.json에서 "strictNullChecks": false로 설정하면, 변수에 null 가능

/*
    2. never 타입
        - 존재하지 않는, 불가능한 타입
        - 무한 루프, 예외 발생 등 정상적으로 종료가 불가능한 모순적인 상황에 사용
*/
function func3(): never {
  // 무한루프의 반환 값? (반환을 할 수가 없는, 정상적으로 종료가 불가능한 모순적인 상황이므로 never 사용)
  while (true) {}
}

function func4(): never {
  throw new Error(); // 예외 발생
}

// 변수로도 지정 가능하지만, undefined, null(널 검사 옵션을 false로 해도 불가능) > 그 어떤 값도 저장할 수 없는 타입을 정의할 때 사용
let b: never;
// b = 1;
// b = {};
// b = "";
// b = undefined;
// b = null;

// let anyVar: any;
// b = anyVar; // any 타입도 불가능
