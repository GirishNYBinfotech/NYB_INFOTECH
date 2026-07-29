import React, { Component } from "react";
import Child from "./Child";

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      name: "React",
    }
  }

  incrementCount= () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  render(){
    console.log("Parent Rendered")
    return (
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h2>Parent Component</h2>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.incrementCount}>Increment Count</button>
        <hr/>
        <Child name={this.state.name}/>
      </div>
    )
  }
}

export default Counter