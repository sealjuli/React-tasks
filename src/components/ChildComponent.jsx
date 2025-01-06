import { useEffect, useState } from "react";

const List = ({ array, setArray }) => {
  const buttonClick = (idx) => {
    setArray((array) => {
      const newarr = [...array];
      newarr[idx] = "!!!" + newarr[idx];
      return newarr;
    });
  };

  const items = array.map((number, idx) => (
    <li key={idx}>
      {number}
      <button onClick={() => buttonClick(idx)}>click</button>
    </li>
  ));

  return <ul>{items}</ul>;
};

export default List;
