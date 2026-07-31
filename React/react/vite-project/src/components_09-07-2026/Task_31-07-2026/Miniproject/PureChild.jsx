import React, { PureComponent } from "react";

class PureChild extends PureComponent {

    render() {

        console.log("Pure Component Render");

        return (
            <h3>Pure Component Value : {this.props.value}</h3>
        );

    }

}

export default PureChild;