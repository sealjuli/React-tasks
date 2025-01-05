import { useState } from "react";

const CounterButton = ({ count, updateCount }) => {
  const buttonClick = () => updateCount(count + 1);

  return <button onClick={buttonClick}>+</button>;
};

export default CounterButton;
