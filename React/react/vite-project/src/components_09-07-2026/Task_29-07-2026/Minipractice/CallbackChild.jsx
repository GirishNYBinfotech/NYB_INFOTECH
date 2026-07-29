import React from "react";

function CallbackChild({ increment }) {
    console.log("Callback Child Rendered");
    return (
        <div>
            <button onClick={increment}>Increment from Child</button>
        </div>
    );
}

export default React.memo(CallbackChild);