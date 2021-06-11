import { Component } from "react";
import { Increment } from "./Increment";

export class Counter extends Component {
  render() {
    return (
      <div>
        <h2>
          {this.props.name} {this.props.count}
        </h2>
        <div>
          <Increment name={this.props.name} onClick ={this.props.onIncrement} />
        </div>
      </div>
    );
  }
}

Counter.defaultProps = {
  name: "0",
};