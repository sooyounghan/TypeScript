/**
 * Pick<T, K>
 *  - Pick : 뽑다, 고르다
 *  - 객체 타입으로부터 특정 프로퍼티만 추출해내는 기능
 */
// Pick<T, K> : T는 인터페이스 / 타입 / 클래스 등, K는 추출하고 싶은 프로퍼티 (여러개면 Union)
const legacyPost = {
    title: "옛날 글",
    content: "옛날 컨텐츠",
};
// T = Post, K = "title"
// Pick<Post, Exclude<keyof Post, "title">>
// = Pick<Post, Exclude<"title" | "tags" | "contents" | "thumbnailURL", "title">
// 💡 Exclude : 앞에 전달한 타입 변수에서 뒤에 전달한 타입 변수를 제거
// = Pick<Post, "tags" | "contents" | "thumbnailURL">
const noTitlePost = {
    content: "",
    tags: [],
    thumnailURL: "",
};
export {};
