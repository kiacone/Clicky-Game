import React from "react";
import "./Title.css";

const Title = props => (
  <div>
    <section className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">Clicky Game</h1>
        <p className="lead text-muted">Click on an image to earn points, but don't click on any of the same image more than once!</p>
      </div>
    </section>
  </div>
);

export default Title;
