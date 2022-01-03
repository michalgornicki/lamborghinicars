import React from "react";
import "./App.css";
import sample from "./sample.mp4";

function App() {
  return (
    <p>
      <video className="video" autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video>
    </p>
  );
}

export default App;
