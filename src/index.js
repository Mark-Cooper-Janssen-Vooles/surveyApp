import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

{
  /* <Question number={1} title="I enjoy working with Express" />
          <Question number={2} title="I enjoy working with Mongo" />
          <Question number={3} title="I enjoy working with React" /> */
}

const questions = [
  {
    title: "I enjoy working with Express"
  },
  {
    title: "I enjoy working with Mongo"
  },
  {
    title: "I enjoy working with React"
  }
];

ReactDOM.render(<App questions={questions} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
