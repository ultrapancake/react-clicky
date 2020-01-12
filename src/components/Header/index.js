import React from "react";
import "./style.css";

function Header(props) {
  return (
    <div className="header">
      <p id="headerLeft">React Clicky Game </p>
      <p id="headerMiddle">{props.headerText}</p>
      <p id="headerRight">
        Score: {props.score} | Top Score: {props.topScore}
      </p>
    </div>
  );
}

export default Header;
