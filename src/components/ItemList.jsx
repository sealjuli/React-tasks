import { useMemo } from "react";

const ItemList = ({ array, search }) => {
  // Вычисления, требующие много времени или ресурсов
  // Например, фильтрация или сортировка массива данных
  const items = useMemo(
    () =>
      array
        .filter((val) => val.toString().includes(search.toString()))
        .map((val, idx) => <li key={idx}>{val}</li>),
    [array, search]
  );

  return <ul>{items}</ul>;
};

export default ItemList;
