import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <p>App</p>
      <img src={`${process.env.PUBLIC_URL}/images/girl.svg`} />
    </>
  );
}

export default App;
