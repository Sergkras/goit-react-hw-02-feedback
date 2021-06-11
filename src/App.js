import { Component } from "react";
import { Counter } from "./Counter";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  incrementVote = (vote) => () => {
    this.setState({ [vote]: this.state[vote] + 1 });
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
          <div style={{textAlign: "center", padding: "15px", color: "purple"}}>

            <h1 style={{padding: "30px"}}> Please leave feedback </h1>

            <div style={{textAlign: "center"}}>

            <h1>Statistics</h1>

            <div style={{color: "green"}}>
            <Counter 
              count={good}
              onIncrement={this.incrementVote("good")}
              name="good:"
            />
            </div>
            <div style={{color: "blue"}}>
            <Counter
              count={neutral}
              onIncrement={this.incrementVote("neutral")}
              name="neutral:"
            />
            </div>
            <div style={{color: "black"}}>
            <Counter
              count={bad}
              onIncrement={this.incrementVote("bad")}
              name="bad:"
            />
</div>
            <h2>Total: {good + neutral + bad}</h2>
            <h2>Positive feedback: {Math.floor(good * 100 / (good + neutral + bad))}%</h2>
          </div>
          </div>
        );
      }
  }

export default App;
