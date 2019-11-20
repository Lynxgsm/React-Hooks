import React, { useContext } from "react";
import { DataContext } from "../../provider";

export const Result = () => {
  const context = useContext(DataContext);
  return (
    <div>
      <p>La réponse est {context.response}</p>
    </div>
  );
};
