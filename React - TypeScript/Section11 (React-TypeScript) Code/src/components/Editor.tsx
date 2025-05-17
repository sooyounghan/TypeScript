import { useState } from "react";
import { useTodoDispatch } from "../App";

interface Props {}

export default function Editor(props: Props) {
  const dispatch = useTodoDispatch();

  // useState는 초기값으로 전달한 인수의 타입에 따라 state 변수와 state 변화 함수의 타입을 자동으로 추론
  // const [text, setText] = useState<string>(); // 제네릭 함수 (초기값이 비어있다면, undefined 타입으로 추론되므로, 이 경우 타입 변수 설정 필요)
  const [text, setText] = useState("");

  // e는 아무런 타입을 설정하지 않으면 암묵적 any 타입으로 지정
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    dispatch.onClickAdd(text);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={onChangeInput} />
      <button onClick={onClickButton}> 추가 </button>
    </div>
  );
}
