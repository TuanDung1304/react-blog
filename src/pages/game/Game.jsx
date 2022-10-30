import React from "react";
import "./main.css";
import runGame from "./jquery";

export default function Game() {
  runGame();

  return (
    <div className="container">
		<h1 className="gameTitle">Memory Card Game with jQuery</h1>
      <div className="wrapper">
        <ul className="cards"></ul>
      </div>
    </div>
  );
}
