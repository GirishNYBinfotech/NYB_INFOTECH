import React, { PureComponent } from "react";

class PureCounter extends PureComponent {
    render() {
        console.log("Pure Component Rendered");
        return (
            <div>
                <h3>Pure Component Count : {this.props.count}</h3>
            </div>
        )
    }
}

export default PureCounter;