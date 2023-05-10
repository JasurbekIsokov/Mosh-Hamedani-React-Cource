import { useReducer, useState } from "react";
import CounterReducer from "./reducers/CounterReducer";

const Counter = () => {
  const [value, dispatch] = useReducer(CounterReducer, 0);

  return (
    <div className="container">
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
        className="btn btn-primary mx-3"
      >
        Increment
      </button>
      Counter: {value}
      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        className="btn btn-primary mx-3"
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch({ type: "RESET" })}
        className="btn btn-primary mx-1"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
