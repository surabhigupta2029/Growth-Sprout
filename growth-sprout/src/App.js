import React from "react";
import "./App.css";
import Background from "./components/Background";
import MyForm from "./components/MyForm";
import DisplayJson from "./DisplayJson";

function App() {
  return (
    <>
      <Background />
      <div className="under-logo">
        <MyForm />
        <DisplayJson />

      </div>
    </>
  );
}

export default App;
