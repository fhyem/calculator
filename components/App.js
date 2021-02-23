import React, { Component } from "react";
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstValue: 0,
      secondValue: 0,
      result: "",
      operator: "",
    };
  }

  numInput(e) {
    if (this.state.firstValue !== 0) {
      this.setState({ firstValue: this.state.firstValue + e.target.value });
    } else {
      this.setState({ firstValue: e.target.value });
    }
  }

  operandInput(value) {
    this.setState({ operator: value });
    console.log(value.target.value);
  }

  clearResult() {
    this.setState({
      firstValue: 0,
      secondValue: 0,
      result: "",
      operator: "",
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Calculator React</h1>
        <div className="container">
          <div className="header">Calculator</div>
          <input type="text" className="result" value={this.state.firstValue} />
          <div className="second-row">
            <input
              type="button"
              name=""
              value="7"
              className="global seven"
              onClick={(e) => this.numInput(e)}
            />
            <input
              type="button"
              name=""
              value="8"
              className="global"
              onClick={(e) => this.numInput(e)}
            />
            <input
              type="button"
              name=""
              value="9"
              className="global"
              onClick={(e) => this.numInput(e)}
            />
            <input
              type="button"
              name=""
              value="/"
              className="global divide"
              onClick={(operator) => this.operandInput(operator)}
            />
          </div>
          <div className="third-row">
            <input
              type="button"
              name=""
              value="4"
              className="global"
              onClick={(e) => this.numInput(e)}
            />
            <input
              type="button"
              name=""
              value="5"
              className="global"
              onClick={(e) => this.numInput(e)}
            />
            <input
              type="button"
              name=""
              value="6"
              className="global"
              onClick={(e) => this.numInput(e)}
            />
            <input
              type="button"
              name=""
              value="X"
              className="global multiply"
              onClick={(operator) => this.operandInput(operator)}
            />
          </div>
          <div className="fourth-row">
            <input
              type="button"
              name=""
              value="1"
              className="global"
              onClick={(e) => this.numInput(e)}
            />
            <input
              type="button"
              name=""
              value="2"
              className="global"
              onClick={(e) => this.numInput(e)}
            />
            <input
              type="button"
              name=""
              value="3"
              className="global"
              onClick={(e) => this.numInput(e)}
            />
            <input
              type="button"
              name=""
              value="-"
              className="global minus"
              onClick={(operator) => this.operandInput(operator)}
            />
          </div>
          <div className="conflict">
            <div className="left">
              <input
                type="button"
                name=""
                value="0"
                className="global big zero"
                onClick={(e) => this.numInput(e)}
              />
              <input
                type="button"
                name=""
                value="."
                className="global small dot"
                onClick={(e) => this.numInput(e)}
              />
              <input
                type="button"
                name=""
                value="Del"
                className="red small white-text top-margin delete"
                onClick={() => this.clearResult()}
              />
              <input
                type="button"
                name=""
                value="="
                className="green white-text big top-margin equal"
                onClick={(operator) => this.operandInput(operator)}
              />
            </div>
            <div className="right">
              <input
                type="button"
                name=""
                value="+"
                className="global grey plus"
                onClick={(operator) => this.operandInput(operator)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
