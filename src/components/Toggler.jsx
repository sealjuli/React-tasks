import React, { useState } from "react";
import { Themes } from "../contexts/Context";

const CheckBox = ({ thema, setThema }) => {
  const [value, setValue] = useState(false);
  const onChange = (thema, value) => {
    console.log(thema);

    if (thema === Themes.light) {
      setThema(Themes.dark);
    } else {
      setThema(Themes.light);
    }

    setValue((value) => !value);
  };

  return (
    <input
      type="checkbox"
      onClick={() => onChange(thema, value)}
      checked={value}
      readOnly
    />
  );
};

export default CheckBox;
