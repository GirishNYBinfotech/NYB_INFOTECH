import React from "react";
import useCounter from "./useCounter";

function Counter() {
    const { count, increment } = useCounter();
    return (
        <>
            <h2>Custom Hook Counter</h2>
            <h3>{count}</h3>
            <button onClick={increment}>
                Increment
            </button>
        </>
    );
}

export default Counter;