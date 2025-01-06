import React, { useContext } from "react";
import { Themes, Context } from "../contexts/Context";

const ThemaText = React.memo(() => {
  console.log("ThemaText");

  return (
    <h3>
      {useContext(Context) === Themes.light ? "Светлая тема" : "Темная тема"}
    </h3>
  );
});

export default ThemaText;
