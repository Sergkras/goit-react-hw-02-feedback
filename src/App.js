import { Component } from "react";
import { Counter } from "./Counter";


class App extends Component {
 state = {
  good: 0,
  neutral: 0,
  bad: 0
}

  incrementVote = (vote) => () => {
    this.setState({ [vote ]: this.state[vote ] + 1 });

  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>

        <h1> Please leave feedback { good + neutral + bad } </h1>
        <Counter
          count={good}
          onIncrement={this.incrementVote("good")}
          name="good"
        />
        <Counter
          count={neutral}
          onIncrement={this.incrementVote("neutral")}
          name="neutral"
        />
        <Counter
          count={bad}
          onIncrement={this.incrementVote("bad")}
          name= "bad"
        />
      </div>
    );
  }
}


export default App;
