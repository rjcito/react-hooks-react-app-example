import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));
//Function comes from the react-dom npm package. It takes in two arguments
// 1. A React component to render (typically, we'll render our top-level App component here)
// 2. A DOM Element where we want that component to be rendered (by convention, a div with the ID of root).
