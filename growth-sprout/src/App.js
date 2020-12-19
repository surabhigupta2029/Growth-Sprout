import React from "react";
import "./App.css";
import Background from "./components/Background";
import MyForm from "./components/MyForm";

function App() {
  return (
    <>
      <Background />
      <div className="under-logo">
        <MyForm />
      </div>
    </>
  );
}

export default App;
