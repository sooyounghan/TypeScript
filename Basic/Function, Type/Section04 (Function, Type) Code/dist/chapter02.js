/**
 * 1. 함수 타입의 호환성
 *  - 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단해도 되는지?
 *  - 첫 번째, 반환값 타입이 호환되는가?
 *  - 두 번쨰, 매개변수 타입이 호환되는가?
 *  - 두 기준이 모두 만족되어야 함
 */
let a = () => 10;
let b = () => 10;
a = b; // 허용 (Up-Casting)
let c = (value) => { };
let d = (value) => { };
// c = d; // 오류 발생 (Up-Casting)
d = c; // 허용 (Down-Casting)
let animalFunc = (animal) => {
    console.log(animal.name);
};
let dogFunc = (dog) => {
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
let testFunc2 = (dog) => {
    console.log(dog.name);
};
let func1 = (a, b) => { };
let func2 = (a) => { };
func1 = func2;
export {};
// func2 = func1; // 오류 발생
