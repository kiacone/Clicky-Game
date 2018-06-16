import React from "react";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <header>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="navbar-brand">Clicky Game</div>
        <div className="navbar-text scores">
        Score: {props.score} High Score: {props.highScore}
        </div>
      </nav>
    </header>
);

export default Navbar;
