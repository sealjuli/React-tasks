import React from "react";

const CounterButton = React.memo(({ count, updateCount }) => {
  console.log("CounterButton");
  const buttonClick = () => updateCount(count + 1);

  return <button onClick={buttonClick}>+</button>;
});

export default CounterButton;
