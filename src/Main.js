import React from "react";
import "./Main.css";

class Main extends React.Component {
  render() {
    return (
      <div>
        <div className="box">
          <h1 className="headerText"> AWESOME CARD WAR GAME </h1>
        </div>
        <div className="pl1Wrapper">
          <h1>Player 1</h1>
          <p>Key to draw card: x </p>
          <p>Cards in deck: 0</p>
          <p>Wins: 0</p>
          <p>Losses: 0</p>
          <p>Ties:0</p>
        </div>
        <div className="pl2Wrapper">
          <h1>Player 2</h1>
          <p>Key to draw card: 0</p>
          <p>Cards in deck: 0</p>
          <p>Wins: 0</p>
          <p>Losses: 0</p>
          <p>Ties: 0</p>
        </div>
        <button className="stBtn">Start New Game</button>
        <div>
          <img
            className="backSide"
            src={"./pics/back.png"}
            alt="card backside"
          />
          <img
            className="backSide"
            src={"./pics/back.png"}
            alt="card backside"
          />
        </div>
        <div className="gameInfo">
          <p>Current stake: 0</p>
          <p>Messages: Let's play! </p>
        </div>
      </div>
    );
  }
}

export default Main;
