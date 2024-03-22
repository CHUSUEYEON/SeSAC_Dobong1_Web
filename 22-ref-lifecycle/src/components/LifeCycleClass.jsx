import { Component } from "react";

class MyComponent extends Component {
  // 마운트 되었을 때
  componentDidMount() {
    console.log("class component, mount됨!!");
  }

  // 업데이트 되었을 때
  componentDidUpdate() {
    console.log("class component, upndate됨!!");
  }

  // 언마운트 예정일 때
  componentWillUnmount() {
    console.log("class component, unmount됨!!");
  }

  render() {
    return <p>My Component {this.props.number}</p>;
  }
}

class LifeCycleClass extends Component {
  state = {
    number: 0,
    visible: true,
  };
  changeNumberState = () => {
    this.setState({ number: this.state.number });
  };
  changeVisibleState = () => {
    this.setState({ visible: !this.state.visible });
  };
  render() {
    return (
      <>
        <button onClick={this.changeNumberState}>number + 1</button>
        <button onClick={this.changeVisibleState}> on/off</button>
        {this.state.visible && (
          <MyComponent number={this.state.number}></MyComponent>
        )}
        ;
      </>
    );
  }
}

export default LifeCycleClass;
