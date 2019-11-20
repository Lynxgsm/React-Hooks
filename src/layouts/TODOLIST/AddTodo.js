import React, { useContext, useState } from "react";
import { DataContext } from "../../provider";

export const AddTodo = () => {
  const context = useContext(DataContext);
  const [todo, setTodo] = useState("");
  return (
    <div>
      <input
        autoFocus
        onChange={e => {
          setTodo(e.target.value);
        }}
        value={todo}
      ></input>
      <button
        onClick={() => {
          if (todo !== "") {
            context.addTodo(todo);
            setTodo("");
          }
        }}
      >
        Add todo
      </button>
    </div>
  );
};
