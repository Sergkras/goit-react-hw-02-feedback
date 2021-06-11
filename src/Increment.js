import { Component } from "react";

export class Increment extends Component {
  render() {
    return (
      <button
        onClick={() => {
          this.props.onClick();
          console.log(this.props.name)
        }}
      >{this.props.name}</button>
    );
  }
}
