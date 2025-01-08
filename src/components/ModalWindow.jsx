import React from "react";

const ModalWindow = React.memo(({ data }) => {
  console.log("ModalWindow");

  return <div>{"Успешно зарегестрировано " + JSON.stringify(data)}</div>;
});

export default ModalWindow;
