/**
 * Partial<T>
 *  - Partial : 일부분의, 부분적인
 *  - 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */
// 임시 저장된 게시글
const draft = {
    title: "나중에 짓기",
    content: "초안",
};
const withThumbnailPost = {
    title: "타입스크립트 후기",
    tags: ["ts"],
    content: "",
    thumnailURL: "https://...",
};
const readonlyPost = {
    title: "보호된 게시글입니다.",
    tags: [],
    content: "",
};
export {};
// readonlyPost.content = ""; // 오류
