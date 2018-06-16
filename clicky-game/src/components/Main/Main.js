import React from "react";
import "./Main.css";

const Main = props => <main className="main" role="main">
<h3>{props.message}</h3>
<div className="friendContainer">
  <div className="row">
    {props.children}
  </div>
</div>

</main>;

export default Main;
