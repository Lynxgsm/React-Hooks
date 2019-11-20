import React, { createContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = props => {
  const [todos, setTodos] = useState([]);
  const [nb1, setNb1] = useState(0);
  const [nb2, setNb2] = useState(0);
  const [response, setResponse] = useState(0);
  return (
    <DataContext.Provider
      value={{
        todos: todos,
        addTodo: text => {
          const t = todos.slice();
          t.push(text);
          setTodos(t);
        },
        removeTodo: () => {
          const t = todos.slice();
          t.pop();
          setTodos(t);
        },
        removeItem: index => {
          const t = todos.slice();
          t.splice(index, 1);
          setTodos(t);
        },
        number1: nb1,
        setNumber1: num => {
          setNb1(num);
        },
        number2: nb2,
        setNumber2: num => {
          setNb2(num);
        },
        getResult: op => {
          switch (op) {
            case "add":
              setResponse(parseInt(nb1) + parseInt(nb2));
              break;
            case "sub":
              setResponse(parseInt(nb1) - parseInt(nb2));
              break;
            case "multi":
              setResponse(parseInt(nb1) * parseInt(nb2));
              break;
            default:
              setResponse(parseInt(nb1) / parseInt(nb2));
              break;
          }
        },
        response: response
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
