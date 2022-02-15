import React from "react";
import DidUpdate from "./DidUpdate/DidUpdate";
import ArrayInUseState from "./DidUpdate/ArrayInUseState";
import CounterWithReducer from "./useReducer/CounterWithReduce";

import "./App.css";
const App = () => {
  return (
    <div>
      <CounterWithReducer />
      <DidUpdate />
      <ArrayInUseState />
    </div>
  );
};

export default App;
