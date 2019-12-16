import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { numericLiteral } from "@babel/types";

// function Option(props) {
//   return (
//     <li>
//       <input type="radio" /> <label>{props.label}</label>
//     </li>
//   );
// }

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {checkedOption: ""};
  }

  toggleSelected = (argument) => {
    this.setState({ checkedOption: argument })
  }

  displaySelected = () => {
    if(this.state.checkedOption != ""){
      return <div>Your selected option is {this.state.checkedOption}</div>
    }
  }

  option = (arg) => {
    return (
      <li>
        <input name="1" type="radio" onChange={() => {this.toggleSelected(arg)}} /> <label>{arg}</label>
      </li>
    );
  }

  render() {
    return (
      <div>
        <h3>
          Question #{this.props.number}: {this.props.title}
        </h3>

        {this.displaySelected()}
        <ul>
          {this.option("Strongly Agree")}
          {this.option("Agree")}
          {this.option("Neutral")}
          {this.option("Disagree")}
          {this.option("Strongly Disagree")}
        </ul>
      </div>
    );
  } 
}

class App extends React.Component {
  renderQuestions() {
    return this.props.questions.map((question, i) => (
      <Question {...question} number={i + 1} />
    ));
  }

  render() {
    return (
      <div>
        <h1>Surveys</h1>

        <div>
          <h2>Engagement Survey</h2>
          <div>{this.renderQuestions()}</div>
        </div>
      </div>
    );
  }
}

export default App;
