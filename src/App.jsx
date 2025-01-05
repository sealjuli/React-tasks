import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import List from "./components/ChildComponent";
import { useState, useRef } from "react";

const ParentComponent = () => {
  const [array, setArray] = useState([1, 2, 3]);
  const [text, setText] = useState("");
  const textInput = useRef(null);

  const inputChange = (event) => setText((text) => event.target.value);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setArray((array) => [...array, event.target.value]);
      setText((text) => "");
    }
  };

  const buttonClick = () => textInput.current.focus();

  return (
    <div>
      <input
        ref={textInput}
        value={text}
        onChange={inputChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={buttonClick}>Фокус</button>
      <List array={array} setArray={setArray}></List>
    </div>
  );
};

export default ParentComponent;
