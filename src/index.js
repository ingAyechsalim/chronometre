import ReactDOM from "react-dom";
import "./styles.css";
import React from "react";
import Timer from "./Timer";

function CHRONOMETRE() {
  return (
    <div className="TimerDynamic">
      <Timer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<CHRONOMETRE />, rootElement);
