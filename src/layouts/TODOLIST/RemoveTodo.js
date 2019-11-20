import React, { useContext } from "react";
import { DataContext } from "../../provider";

export const RemoveTodo = () => {
  const context = useContext(DataContext);
  return (
    <div>
      <button
        onClick={() => {
          context.removeTodo();
        }}
      >
        Remove last todo
      </button>
    </div>
  );
};
