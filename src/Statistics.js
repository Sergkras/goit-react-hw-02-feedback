import { Component } from "react";
import { Increment } from "./Increment";

render() {
    const { good, neutral, bad } = this.state;
    return (
          <div>
            <h1> Please leave feedback </h1>

            <h1>Statistics</h1>
            <Counter
              count={good}
              onIncrement={this.incrementVote("good")}
              name="good:"
            />
            <Counter
              count={neutral}
              onIncrement={this.incrementVote("neutral")}
              name="neutral:"
            />
            <Counter
              count={bad}
              onIncrement={this.incrementVote("bad")}
              name="bad:"
            />

            <h2>Total: {good + neutral + bad}</h2>
            <h2>Positive feedback: {Math.floor(good * 100 / (good + neutral + bad))}%</h2>
          </div>
        );

Counter.defaultProps = {
  name: "Banana 🍌",
};