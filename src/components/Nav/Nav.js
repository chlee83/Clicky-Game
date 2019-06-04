import React from "react";
import "./Nav.css"

const Nav = () => {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-success">
        <a class="navbar-brand" href="#">Click-Game</a>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
           
          </ul>
          <span class="font-score">
            Score: <span id="score">{this.state.score}</span> | Top Score: <span id="top-score">0</span>
          </span>
        </div>
      </nav>
    );
};

export default Nav;
