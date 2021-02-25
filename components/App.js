import React, { useState } from "react";
import "./app.css";

function App() {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState("");

  const numInput = (e) => {
    if (firstValue === 0 || result !== 0) {
      setFirstValue(e.target.name);
      setResult(0);
      setOperator("");
      setSecondValue(0);
    } else if (firstValue !== 0 && operator === "") {
      setFirstValue(firstValue + e.target.name);
    } else if (operator !== "") {
      secondValue
        ? setSecondValue(secondValue + e.target.name)
        : setSecondValue(e.target.name);
    }
  };

  const clearResult = () => {
    this.setState({
      firstValue: 0,
      secondValue: 0,
      result: 0,
      operator: "",
    });
  };

  const showResult = () => {
    console.log(firstValue, secondValue, operator);
    let firstNum = firstValue;
    let secondNum = secondValue;
    let operand = operator;

    setResult(() => {
      switch (operand) {
        case "+":
          return Number(firstNum) + Number(secondNum);
        case "-":
          return Number(firstNum) - Number(secondNum);
        case "x":
          return Number(firstNum) * Number(secondNum);
        case "/":
          return Number(firstNum) / Number(secondNum);
      }
    });
  };

  return (
    <div className="App">
      <h1>Calculator React</h1>
      <div className="container">
        <div className="header">Calculator</div>
        <h2 className="result">{result}</h2>
        <h2 className="result">{firstValue} First-Value</h2>
        <h2 className="result">{operator} Operator</h2>
        <h2 className="result">{secondValue} Second-Value</h2>
        <div className="second-row">
          <button
            type="button"
            className="global seven"
            name="7"
            onClick={(e) => numInput(e)}>
            7
          </button>
          <button
            type="button"
            className="global"
            name="8"
            onClick={(e) => numInput(e)}>
            8
          </button>
          <button
            type="button"
            className="global"
            name="9"
            onClick={(e) => numInput(e)}>
            9
          </button>
          <button
            type="button"
            className="global divide"
            name="/"
            onClick={() => setOperator("/")}>
            /
          </button>
        </div>
        <div className="third-row">
          <button
            type="button"
            className="global"
            name="4"
            onClick={(e) => numInput(e)}>
            4
          </button>
          <button
            type="button"
            className="global"
            name="5"
            onClick={(e) => numInput(e)}>
            5
          </button>
          <button
            type="button"
            className="global"
            name="6"
            onClick={(e) => numInput(e)}>
            6
          </button>
          <button
            type="button"
            className="global multiply"
            name="x"
            onClick={() => setOperator("x")}>
            x
          </button>
        </div>
        <div className="fourth-row">
          <button
            type="button"
            className="global"
            name="1"
            onClick={(e) => numInput(e)}>
            1
          </button>
          <button
            type="button"
            className="global"
            name="2"
            onClick={(e) => numInput(e)}>
            2
          </button>
          <button
            type="button"
            className="global"
            name="3"
            onClick={(e) => numInput(e)}>
            3
          </button>
          <button
            type="button"
            className="global minus"
            name="-"
            onClick={() => setOperator("-")}>
            -
          </button>
        </div>
        <div className="conflict">
          <div className="left">
            <button
              type="button"
              className="global big zero"
              name="0"
              onClick={(e) => numInput(e)}>
              0
            </button>
            <button
              type="button"
              className="global small dot"
              name="."
              onClick={(e) => numInput(e)}>
              .
            </button>
            <button
              type="button"
              className="red small white-text top-margin delete"
              name="Del"
              onClick={() => clearResult()}>
              Del
            </button>

            <button
              type="button"
              className="green white-text big top-margin equal"
              onClick={() => showResult()}>
              =
            </button>
          </div>
          <div className="right">
            <button
              type="button"
              className="global grey plus"
              onClick={() => setOperator("+")}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
