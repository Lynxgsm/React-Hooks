import React from "react";
import { AddTodo } from "./AddTodo";
import { Todos } from "./Todos";
import { RemoveTodo } from "./RemoveTodo";

export const Home = () => {
  return (
    <div>
      <AddTodo></AddTodo>
      <Todos></Todos>
      <RemoveTodo></RemoveTodo>
    </div>
  );
};
