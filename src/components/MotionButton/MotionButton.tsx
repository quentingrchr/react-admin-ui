import React from "react";

export interface IProps {
  /** 버튼 텍스트 */
  text: string;
  /** 클릭했을 때 호출할 함수 */
  onClick: () => void;
}
/** `MotionButton` 기존 Button 컴포넌트에 에니메이션을 부각시켰습니다. */
const MotionButton: React.FC<IProps> = ({ text, onClick }) => {
  function handleClick() {
    onClick();
  }

  return <button onClick={handleClick}>{text}</button>;
};

export default MotionButton;
