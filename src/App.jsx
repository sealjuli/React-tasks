import { useState, useCallback } from "react";
import CounterButton from "./components/CounterButton";
import ItemList from "./components/ItemList";
import SearchInput from "./components/SearchInput";
import "./App.css";

const ParentComponent = () => {
  console.log("ParentComponent");

  const a = [];
  for (let i = 0; i < 1001; i++) {
    a.push(i);
  }

  const [array, setArray] = useState(a);
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const updateSearch = useCallback((newSearch) => {
    setSearch((search) => newSearch);
  }, []);

  const updateCount = useCallback((newCount) => {
    setCount((count) => newCount);
  }, []);

  return (
    <div>
      <h3>{count}</h3>
      <CounterButton count={count} updateCount={updateCount}></CounterButton>
      <br></br>
      <SearchInput search={search} updateSearch={updateSearch}></SearchInput>
      <ItemList array={array} search={search}></ItemList>
    </div>
  );
};

export default ParentComponent;
