import React, { useReducer } from "react";

export const initialState = {
    counter: 0,
};
export const reducer = (state, action) => {
    if (action.type === "Increment") {
        return { counter: state.counter + 1 }
    }
    if (action.type === "Decrement") {
        return { counter: state.counter - 1 };
    }
};
const CounterWithReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>Assalamualaikum useReducer!</h1>
            <h1>Count:{count.counter} </h1>
            <button onClick={dispatch({ type: "Increment" })}>Increment</button>
            <button onClick={dispatch({ type: "Decrement" })}>Decrement</button>
        </div>
    )
}
export default CounterWithReducer;