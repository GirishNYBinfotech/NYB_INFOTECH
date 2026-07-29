import React, { PureComponent } from "react";

class Child extends PureComponent {
  render() {
    console.log("Child Rendered");
    return (
      <div>
        <h2>Child Component</h2>
        <h3>Name: {this.props.name}</h3>
      </div>
    )
  }
}

export default Child;