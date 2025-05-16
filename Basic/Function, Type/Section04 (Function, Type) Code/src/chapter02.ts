/**
 * 1. 함수 타입의 호환성
 *  - 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단해도 되는지?
 *  - 첫 번째, 반환값 타입이 호환되는가?
 *  - 두 번쨰, 매개변수 타입이 호환되는가?
 *  - 두 기준이 모두 만족되어야 함
 */

/**
 * 기준 1 : 반환값이 호환되는가? = 반환값 타입끼리는 Up-Casting 상황에서는 호환된다고 판단, Down-Casting에서는 호환되지 않다고 판단
 */
type A = () => number; // number 타입
type B = () => 10; // number literal 타입

let a: A = () => 10;
let b: B = () => 10;

a = b; // 허용 (Up-Casting)
// b = a; // 오류 발생 (Down-Casting)

/**
 * 기준 2 : 매개변수가 호환되는가?
 *  2-1. 매개변수의 갯수가 같을 때
 *  2-2. 매개변수의 갯수가 다를 때
 *  2-3. 💡 매개변수 타입을 기준으로 호환성 판단할 때는, Up-Casting일 때 호환이 안 된다고 평가, Down-Casting은 호환이 된다고 평가가
 */
// 2-1. 매개변수의 갯수가 같을 때
type C = (value: number) => void; // number 타입
type D = (value: 10) => void; // number literal 타입

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // 오류 발생 (Up-Casting)
d = c; // 허용 (Down-Casting)

type Animal = {
  // 슈퍼 타입
  name: string;
};

type Dog = {
  // 서브 타입
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc; // 오류 발생 (Up-Casting)
dogFunc = animalFunc; //

// 오류 발생 설명 : animal.color 같은 상황 발생할 수 있으므로 오류 발생
/*
let testFunc = (animal:Animal) {
    console.log(animal.name);
    console.log(animal.color); // 오류
}
*/

let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};

// 2-2. 매개변수의 갯수가 다를 때 (타입 동일) : 할당하려고 하는 쪽의 함수의 타입의 매개변수의 갯수가 더 적을때만 호환 가능 (타입 자체가 다른 건 안 됨)
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1; // 오류 발생
