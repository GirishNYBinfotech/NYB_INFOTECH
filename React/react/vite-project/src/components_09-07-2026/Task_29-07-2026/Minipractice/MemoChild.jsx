import React from "react";

function MemoChild() {

    console.log("Memo Child Rendered");

    return (
        <div>
            <h3>React.memo Component</h3>
        </div>
    );
}

export default React.memo(MemoChild);