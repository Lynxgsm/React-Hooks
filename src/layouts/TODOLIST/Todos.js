import React, { useContext } from "react";
import { DataContext } from "../../provider";

export const Todos = () => {
  const context = useContext(DataContext);
  return (
    <div>
      {context.todos.map((todo, index) => {
        return (
          <p key={index}>
            {todo}
            <a
              href="/"
              onClick={e => {
                e.preventDefault();
                context.removeItem(index);
              }}
            >
              Done
            </a>
          </p>
        );
      })}
    </div>
  );
};
