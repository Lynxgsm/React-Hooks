import React, { useContext } from "react";
import { DataContext } from "../../provider";

export const Content = () => {
  const numbers = ["add", "sub", "multi", "div"];
  const context = useContext(DataContext);
  return (
    <div>
      {numbers.map((num, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              context.getResult(num);
            }}
          >
            {num}
          </button>
        );
      })}
    </div>
  );
};
