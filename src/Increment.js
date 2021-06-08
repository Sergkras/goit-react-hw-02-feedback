import { Component } from "react";



export class Increment extends Component {
  render() {
    return (
      <button
        onClick={() => {
          this.props.onClick();

        }}
      >
       Your vote
      </button>
    );
  }
}