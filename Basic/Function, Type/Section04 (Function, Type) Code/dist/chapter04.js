/**
 * 1. 사용자 정의 타입 가드
 */
function isDog(animal) {
    // 반환값 타입으로 true를 반환하면 animal을 Dog 타입이라고 설정
    // animal을 Dog로 타입 단언 후 isBark가 undefined가 아닌지 확인
    return animal.isBark !== undefined;
}
function isCat(animal) {
    return animal.isScratch !== undefined;
}
function warinig(animal) {
    // 타입스크립트는 직접 만든 함수의 반환값을 가지고 타입을 잘 좁히지 못하므로, 반환값 타입으로 true를 반환하면 animal을 Dog 타입이라고 설정
    if (isDog(animal)) {
        // 강아지
        animal;
        // 타입스크립트는 직접 만든 함수의 반환값을 가지고 타입을 잘 좁히지 못하므로, 반환값 타입으로 true를 반환하면 animal을 Cat 타입이라고 설정
    }
    else if (isCat(animal)) {
        // 고양이
        animal;
    }
}
export {};
