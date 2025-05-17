/**
 * 1. 인덱스드 액세스 타입 (Indexed Access Type)
 */
/**
 *  2. 객체 : 객체['추출할 프로퍼티'(string literal)] : 특정 프로퍼티 타입만 추출 (새로운 프로퍼티가 추가, 프로퍼티가 변경되어도 즉시 반영해주므로 원본 타입이 수정되더라도 별도 추가 작업이 필요하지 않음)
 *      - string literal 타입 : 인덱스
 *      - 인덱스를 이용해 특정 프로퍼티에 접근한다고 하여 인덱스드 액세스 타입
 *      - 주의사항
 *          + 💡 1. 인덱스에 들어가는 문자열 : 값이 아닌 타입
 *          + 2. 존재하지 않는 프로퍼티 이름을 쓰면 프로퍼티가 없다는 오류 발생
 */
const key = "author";
// function printAuthorInfo(author: Post[key]) { // key는 변수 (타입 X)
function printAuthorInfo(author) {
    // Post["author"] 타입
    // author 타입 내 id만 추춢 : function printAuthorInfo(author: Post["author"]["id"]) { // Post["author"]["id"] 타입 -> number 타입
    console.log(`${author.name} - ${author.id}`);
}
const post = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "한수영",
        age: 27,
    },
};
printAuthorInfo(post.author);
// const postList: PostList[0] = { // 💡 0은 값이 아닌 number literal 타입
const postList = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "한수영",
        age: 27,
    },
};
// PostList[number] : 요소의 타입을 먼저 number 인덱스 타입으로 추출 -> ["author"] : author 타입으로 해당 프로퍼티 추출
function printAuthorInfo2(author) {
    console.log(`${author.name} - ${author.id}`);
}
export {};
