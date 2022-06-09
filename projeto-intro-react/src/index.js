import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import "./style.css";

// function primeiroJSX() {
//   return <div className="teste">Marcela Gomes - Introdução ao React</div>;
// }

// function soma(a, b) {
//   alert(a + b);
// }

// const App = () => {
//   return (
//     <div className="App">
//       {primeiroJSX()}
//       <Button onClick={() => soma(10, 20)} name="Marcela Gomes" />
//     </div>
//   );
// };

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clock: 1000,
      copo: "Água",
    };
  }

  componentDidMount() {
    window.setTimeout(() => {
      this.setState({
        copo: "Suco",
      });
    }, 5000);
  }

  alterarCopo = () => {
    this.setState({
      copo: "Refrigerante",
    });
  };

  render() {
    const { clock, copo } = this.state;

    return (
      <div>
        <h1>{clock}</h1>
        <button onClick={() => this.alterarCopo()}>
          <h1>{copo}</h1>
        </button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
