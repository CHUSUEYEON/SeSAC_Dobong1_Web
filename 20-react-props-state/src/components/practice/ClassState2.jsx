import { Component } from "react";

class ClassState2 extends Component {
  state = {
    start: 0,
  };
  render() {
    const { start } = this.state;
    return (
      <div>
        {this.state.start}
        <button
          onClick={() => {
            this.setState({ start: start + 2 });
          }}
        >
          +2
        </button>
        <button
          onClick={() => {
            this.setState({ start: start - 1 });
          }}
        >
          -1
        </button>
      </div>
    );
  }
}

export default ClassState2;
