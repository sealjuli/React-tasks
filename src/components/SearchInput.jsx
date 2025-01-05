import { useRef, useState } from "react";

const SearchInput = ({ array, setArray }) => {
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
    <>
      <input
        ref={textInput}
        value={text}
        onChange={inputChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={buttonClick}>Фокус</button>
    </>
  );
};

export default SearchInput;
