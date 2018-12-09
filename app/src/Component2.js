import React, { Component } from "react";
import cat2 from "./catImages/271631.svg";

class Component2 extends Component {
  render() {
    return (
      <div>
        <h2>Component 2</h2>
        <img className="cat" src={cat2} alt="" />
        <p>
          *waves*! I'm Kitty #271631. I want to live in a world where people believe that one day cats will rule this planet. I would give it all up to star in a soap opera. Will you be the marmalade to my ranch dressing?
        </p>
      </div>
    );
  }
}

export default Component2;
