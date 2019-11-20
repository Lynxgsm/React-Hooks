import React from "react";
import { DataProvider } from "./provider";
import { Home } from "./layouts/TODOLIST/Home";
import { Calc } from "./layouts/CALCULATRICE/Calc";

function App() {
  return (
    <DataProvider>
      <Calc></Calc>
      {/* <Home></Home> */}
    </DataProvider>
  );
}

export default App;
