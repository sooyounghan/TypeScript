/**
 * 1. 인덱스드 액세스 타입 (Indexed Access Type)
 */

// Index라는 것을 이용해 다른 타입 내 특정 프로퍼티 타입을 추출하는 타입 (객체, 배열, 튜플에 모두 사용 가능)
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

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
function printAuthorInfo(author: Post["author"]) {
  // Post["author"] 타입
  // author 타입 내 id만 추춢 : function printAuthorInfo(author: Post["author"]["id"]) { // Post["author"]["id"] 타입 -> number 타입
  console.log(`${author.name} - ${author.id}`);
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "한수영",
    age: 27,
  },
};

printAuthorInfo(post.author);

/**
 * 3. 배열 타입 : 인터페이스는 객체 타입에만 정의되므로 Post를 타입 별칭으로 변경 후 사용
 *  - 배열에서의 인덱스드 액세스 타입 : 배열 : 타입별칭[number] -> 해당 배열 타입으로부터 하나의 요소 타입만 가져옴 (number = 인덱스 타입)
 *  - 배열의 인덱스에 접근하는 것처럼 숫자 리터럴 사용해도 동일
 *  - 즉, 배열의 인덱스 타입을 들어가는 것
 */
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

// const postList: PostList[0] = { // 💡 0은 값이 아닌 number literal 타입
const postList: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "한수영",
    age: 27,
  },
};

// PostList[number] : 요소의 타입을 먼저 number 인덱스 타입으로 추출 -> ["author"] : author 타입으로 해당 프로퍼티 추출
function printAuthorInfo2(author: PostList[number]["author"]) {
  console.log(`${author.name} - ${author.id}`);
}

/**
 * 3. 튜플 타입
 *  - 인덱스 타입을을 통해 추출 가능
 *  - 길이가 고정된 배열이므로 존재하지 않는 인덱스 타입 추출하려고 하면 오류 발생
 */
type Tup = [number, string, boolean];

type Tup0 = Tup[0]; // number 타입
type Tup1 = Tup[1]; // string 타입
type Tup2 = Tup[2]; // boolean 타입
// type Tup3 = Tup[3]; // 오류
type Tup3 = Tup[number]; // 💡 Tuple 타입의 모든 타입의 최적의 공통 타입을 뽑아옴 (number | string | boolean union 타입) [number는 인덱스의 타입]
