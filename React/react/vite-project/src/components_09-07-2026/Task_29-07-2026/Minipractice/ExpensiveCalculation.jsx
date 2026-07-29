import React from "react";

function ExpensiveCalculation({ value }) {
    console.log("Expensive Component Rendered");
    return (
        <div>
            <h3>useMemo Example</h3>
            <p>{value}</p>
        </div>
    );
}

export default ExpensiveCalculation;