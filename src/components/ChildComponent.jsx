import React from "react";

class LifecycleComponentClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState(
      (state) => ({
        count: state.count + 1,
      }),
      () => {
        console.log(this.state.count);
      }
    );
  }

  async componentDidMount() {
    // Здесь можно выполнять запросы к серверу.
    const result = await fetch("https://todo-redev.herokuapp.com/api-docs/");

    console.log(`Классовый компонент смонтирован.`);
    console.log(result);
  }

  shouldComponentUpdate() {
    return this.state.count % 2 === 1;
  }

  componentDidUpdate() {
    console.log(`Классовый компонент был обновлен! count: ${this.state.count}`);
  }

  componentWillUnmount() {
    console.log("Классовый компонент удален!");
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>+1</button>
      </div>
    );
  }
}

export default LifecycleComponentClass;
