import { useState, useCallback } from "react";
import CounterButton from "./components/CounterButton";
import { Context, Themes } from "./contexts/Context";
import ThemaText from "./components/Thema";
import CheckBox from "./components/Toggler";
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
  const [thema, setThema] = useState(Themes.light);

  const updateSearch = useCallback((newSearch) => {
    setSearch((search) => newSearch);
  }, []);

  const updateCount = useCallback((newCount) => {
    setCount((count) => newCount);
  }, []);

  const root = document.documentElement;
  root.dataset.theme = thema;

  return (
    <Context.Provider value={thema}>
      <ThemaText></ThemaText>
      <CheckBox thema={thema} setThema={setThema}></CheckBox>
      <h3>{count}</h3>
      <CounterButton count={count} updateCount={updateCount}></CounterButton>
      <br></br>
      <SearchInput search={search} updateSearch={updateSearch}></SearchInput>
      <ItemList array={array} search={search}></ItemList>
    </Context.Provider>
  );
};

export default ParentComponent;
