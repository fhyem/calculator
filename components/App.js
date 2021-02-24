import React, { useState } from "react";
import "./app.css";

function App() {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState("");

  const numInput = (e) => {
    // if (result === 0 || operator !== "") {
    //   let firstNum = e.target.value;
    //   return setResult(firstNum);
    // } else {
    //   if (operator === "") {
    //     let firstNum = result + e.target.value;
    //     return setResult(firstNum);
    //   } else {
    //     const valueOne = result;
    //     setFirstValue(valueOne);
    //     setResult(0);
    //     const valueTwo = e.target.value;
    //     setSecondValue(valueTwo);
    //     setFirstValue(result);
    //     setSecondValue(e.target.value);
    //     setResult(e.target.value);
    //     console.log(firstValue);
    //     console.log(e.target.value);
    //     console.log(secondValue);
    //   }
    // }
  };

  const operandInput = (operator) => {
    setOperator(operator.target.value);
  };

  const clearResult = () => {
    this.setState({
      firstValue: 0,
      secondValue: 0,
      result: 0,
      operator: "",
    });
  };

  const calculate = () => {
    switch (operator) {
      case "+":
        setResult(firstValue + secondValue);
        console.log("Plus clicked");
        break;
      case "-":
        setResult(firstValue - secondValue);
        break;
      case "X":
        setResult(firstValue * secondValue);
        break;
      case "/":
        setResult(firstValue / secondValue);
        break;
    }
  };

  const showResult = () => {
    if (secondValue !== "") {
      setResult(calculate());
    } else {
      setResult("Put second value");
    }
  };

  return (
    <div className="App">
      <h1>Calculator React</h1>
      <div className="container">
        <div className="header">Calculator</div>
        <input type="text" className="result" value={result} />
        <div className="second-row">
          <input
            type="button"
            name=""
            value="7"
            className="global seven"
            onClick={(e) => numInput(e)}
          />
          <input
            type="button"
            name=""
            value="8"
            className="global"
            onClick={(e) => numInput(e)}
          />
          <input
            type="button"
            name=""
            value="9"
            className="global"
            onClick={(e) => numInput(e)}
          />
          <input
            type="button"
            name=""
            value="/"
            className="global divide"
            onClick={(operator) => operandInput(operator)}
          />
        </div>
        <div className="third-row">
          <input
            type="button"
            name=""
            value="4"
            className="global"
            onClick={(e) => numInput(e)}
          />
          <input
            type="button"
            name=""
            value="5"
            className="global"
            onClick={(e) => numInput(e)}
          />
          <input
            type="button"
            name=""
            value="6"
            className="global"
            onClick={(e) => numInput(e)}
          />
          <input
            type="button"
            name=""
            value="X"
            className="global multiply"
            onClick={(operator) => operandInput(operator)}
          />
        </div>
        <div className="fourth-row">
          <input
            type="button"
            name=""
            value="1"
            className="global"
            onClick={(e) => numInput(e)}
          />
          <input
            type="button"
            name=""
            value="2"
            className="global"
            onClick={(e) => numInput(e)}
          />
          <input
            type="button"
            name=""
            value="3"
            className="global"
            onClick={(e) => numInput(e)}
          />
          <input
            type="button"
            name=""
            value="-"
            className="global minus"
            onClick={(operator) => operandInput(operator)}
          />
        </div>
        <div className="conflict">
          <div className="left">
            <input
              type="button"
              name=""
              value="0"
              className="global big zero"
              onClick={(e) => numInput(e)}
            />
            <input
              type="button"
              name=""
              value="."
              className="global small dot"
              onClick={(e) => numInput(e)}
            />
            <input
              type="button"
              name=""
              value="Del"
              className="red small white-text top-margin delete"
              onClick={() => clearResult()}
            />
            <input
              type="button"
              name=""
              value="="
              className="green white-text big top-margin equal"
              onClick={() => showResult()}
            />
          </div>
          <div className="right">
            <input
              type="button"
              name=""
              value="+"
              className="global grey plus"
              onClick={(operator) => operandInput(operator)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// class App extends Component {
//   constructor(props) {
//     super(props);

//     // this.state = {
//     //   firstValue: 0,
//     //   secondValue: 0,
//     //   result: 0,
//     //   operator: "",
//     // };
//   }

//   numInput(e) {
//     if (result === 0) {
//       setResult(e.target.value);
//     } else {
//       if (operator === "") {
//         setResult(result + e.target.value);
//       } else {
//         setFirstValue(result);
//       }
//       console.log(this.state.result);
//       console.log(this.state.firstValue);
//     }
//   }

//   operandInput(value) {
//     this.setState({
//       operator: value.target.value,
//     });
//   }

//   clearResult() {
//     this.setState({
//       firstValue: 0,
//       secondValue: 0,
//       result: 0,
//       operator: "",
//     });
//   }

//   showResult() {
//     if (this.state.secondValue !== "") {
//       const result = `${this.state.firstValue}${this.state.operator}${this.state.secondValue}`;
//     }
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Calculator React</h1>
//         <div className="container">
//           <div className="header">Calculator</div>
//           <input type="text" className="result" value={this.state.result} />
//           <div className="second-row">
//             <input
//               type="button"
//               name=""
//               value="7"
//               className="global seven"
//               onClick={(e) => this.numInput(e)}
//             />
//             <input
//               type="button"
//               name=""
//               value="8"
//               className="global"
//               onClick={(e) => this.numInput(e)}
//             />
//             <input
//               type="button"
//               name=""
//               value="9"
//               className="global"
//               onClick={(e) => this.numInput(e)}
//             />
//             <input
//               type="button"
//               name=""
//               value="/"
//               className="global divide"
//               onClick={(operator) => this.operandInput(operator)}
//             />
//           </div>
//           <div className="third-row">
//             <input
//               type="button"
//               name=""
//               value="4"
//               className="global"
//               onClick={(e) => this.numInput(e)}
//             />
//             <input
//               type="button"
//               name=""
//               value="5"
//               className="global"
//               onClick={(e) => this.numInput(e)}
//             />
//             <input
//               type="button"
//               name=""
//               value="6"
//               className="global"
//               onClick={(e) => this.numInput(e)}
//             />
//             <input
//               type="button"
//               name=""
//               value="X"
//               className="global multiply"
//               onClick={(operator) => this.operandInput(operator)}
//             />
//           </div>
//           <div className="fourth-row">
//             <input
//               type="button"
//               name=""
//               value="1"
//               className="global"
//               onClick={(e) => this.numInput(e)}
//             />
//             <input
//               type="button"
//               name=""
//               value="2"
//               className="global"
//               onClick={(e) => this.numInput(e)}
//             />
//             <input
//               type="button"
//               name=""
//               value="3"
//               className="global"
//               onClick={(e) => this.numInput(e)}
//             />
//             <input
//               type="button"
//               name=""
//               value="-"
//               className="global minus"
//               onClick={(operator) => this.operandInput(operator)}
//             />
//           </div>
//           <div className="conflict">
//             <div className="left">
//               <input
//                 type="button"
//                 name=""
//                 value="0"
//                 className="global big zero"
//                 onClick={(e) => this.numInput(e)}
//               />
//               <input
//                 type="button"
//                 name=""
//                 value="."
//                 className="global small dot"
//                 onClick={(e) => this.numInput(e)}
//               />
//               <input
//                 type="button"
//                 name=""
//                 value="Del"
//                 className="red small white-text top-margin delete"
//                 onClick={() => this.clearResult()}
//               />
//               <input
//                 type="button"
//                 name=""
//                 value="="
//                 className="green white-text big top-margin equal"
//                 onClick={() => this.showResult()}
//               />
//             </div>
//             <div className="right">
//               <input
//                 type="button"
//                 name=""
//                 value="+"
//                 className="global grey plus"
//                 onClick={(operator) => this.operandInput(operator)}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
