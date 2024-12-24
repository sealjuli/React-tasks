import { useState } from "react";

const SiblingComponent = () => {
  const [text, setText] = useState("???");

  const changeText = () => {
    setText("REDEV");
  };
  return (
    <div>
      <h1>{`Текущий текст: ${text}`}</h1>
      <button onClick={changeText}>Изменить текст</button>
    </div>
  );
};
export default SiblingComponent;
