import React, { Component } from "react";

class Class extends Component {
  handleClick = () => {
    console.log("Button Clicked!");
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        Click Me
      </button>
    )
  }
}

export default Class