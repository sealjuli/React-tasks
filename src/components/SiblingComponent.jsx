import { useEffect, useState } from "react";

const LifecycleComponentFunc = () => {
  const [count, setCount] = useState(0);
  const [evenCount, setEvenCount] = useState(0);

  const fetchData = async () => {
    try {
      const result = await fetch("https://todo-redev.herokuapp.com/api-docs/");
      console.log("Функциональный компонент смонтирован.");
      console.log(result);
    } catch (error) {
      console.error("Ошибка при запросе:", error);
    }
  };

  useEffect(() => {
    fetchData();

    return () => console.log("Функциональный компонент удален.");
  }, []);

  useEffect(() => {
    console.log(count);
    if (count % 2 === 0) {
      setEvenCount(count);
      console.log(`Функциональный компонент был обновлен! count: ${count}`);
    }
  }, [count]);

  const changeCount = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <h1>{`Count: ${evenCount}`}</h1>
      <button onClick={changeCount}>+1</button>
    </div>
  );
};

export default LifecycleComponentFunc;
