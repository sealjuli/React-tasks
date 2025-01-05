import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ChildComponent from "./components/ChildComponent";
import SearchInput from "./components/SearchInput";
import { useState } from "react";

const ParentComponent = () => {
  const [array, setArray] = useState([1, 2, 3]);

  return (
    <div>
      <SearchInput array={array} setArray={setArray}></SearchInput>
      <ChildComponent array={array} setArray={setArray}></ChildComponent>
    </div>
  );
};

export default ParentComponent;
