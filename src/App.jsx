import { useState } from "react";
import Counter from "./Counter";
import Form from "./Form";
import Settings from "./Settings";
import CurrentSold from "./CurrentSold";
import Task5 from "./Task5";
import Task6 from "./Task6";
import Task7 from "./Task7";
import "./App.css";

function App() {
  return (
    <>
      <Counter />
      <hr></hr>
      <Form />
      <hr />
      <Settings />
      <hr />
      <CurrentSold />
      <hr />
      <Task5 />
      <hr />
      <Task6 />
      <hr />
      <Task7 />
    </>
  );
}

export default App;
