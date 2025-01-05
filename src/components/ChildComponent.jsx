import { useEffect, useState } from "react";

const List = ({ array, setArray }) => {
  const buttonClick = (event) => {
    setArray((array) => {
      const newarr = [...array];
      newarr[event.target.value] = "!!!" + newarr[event.target.value];
      return newarr;
    });
  };

  const items = array.map((number, idx) => (
    <li key={idx}>
      {number}
      <button value={idx} onClick={buttonClick}>
        click
      </button>
    </li>
  ));

  return <ul>{items}</ul>;
};

export default List;
