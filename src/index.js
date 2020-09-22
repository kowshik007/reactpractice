//ES2015 import statements
import React from "react";
import ReactDOM from "react-dom";
// const React=require('react'); different style import statement in common js

//creating a new calss or function for react to render
const App = () => {
  const buttonText="Click Me!";
  return(
    <div>
      <label htmlFor="name" className="NameLabel">EnterName:</label>
      <input id="name" type="text" />
  <button style={{backgroundColor:'burlywood',color:'black'}}>{buttonText}</button>
    </div>
  );
};

//render and display the object
ReactDOM.render(<App />, document.querySelector("#root"));
