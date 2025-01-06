import React from "react";

const SearchInput = React.memo(({ search, updateSearch }) => {
  console.log("SearchInput");
  const inputChange = (event) => updateSearch(event.target.value);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      updateSearch("");
    }
  };

  return (
    <input value={search} onChange={inputChange} onKeyDown={handleKeyDown} />
  );
});

export default SearchInput;
