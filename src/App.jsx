import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ChildComponent from "./components/ChildComponent";
import SiblingComponent from "./components/SiblingComponent";

const ParentComponent = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((counter) => counter + 1);
  };
  const reset = () => {
    setCounter(0);
  };

  const random = () => {
    setCounter(Math.floor(Math.random() * 11));
  };

  const decrement = () => {
    setCounter((counter) => (counter <= 0 ? 0 : counter - 1));
  };

  const name = "Julia";

  return (
    <div>
      <h1>{"Счетчик: " + counter}</h1>
      <button onClick={increment}>{"Увеличить"}</button>
      <br />
      <button onClick={reset}>{"Сбросить"}</button>
      <br />
      <button onClick={random}>{"Случайное значение"}</button>
      <br />
      <button onClick={decrement}>{"Уменьшить"}</button>
      <br />
      <ChildComponent name={name} counter={counter}></ChildComponent>
      <SiblingComponent />
    </div>
  );
};

export default ParentComponent;
