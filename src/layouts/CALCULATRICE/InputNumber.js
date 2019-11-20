import React, { useContext } from "react";
import { DataContext } from "../../provider";

export const InputNumber = () => {
  const context = useContext(DataContext);
  return (
    <div>
      <input
        onChange={e => {
          context.setNumber1(e.target.value);
        }}
        value={context.number1}
      ></input>
      <input
        onChange={e => {
          context.setNumber2(e.target.value);
        }}
        value={context.number2}
      ></input>
    </div>
  );
};
