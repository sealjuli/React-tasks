import { useRef, useState } from "react";

const SearchInput = ({ search, updateSearch }) => {
  const inputChange = (event) => updateSearch(event.target.value);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      updateSearch("");
    }
  };

  return (
    <input value={search} onChange={inputChange} onKeyDown={handleKeyDown} />
  );
};

export default SearchInput;
