import React, { Component } from "react";
import cat3 from "./catImages/44215.svg";

class Component3 extends Component {
  render() {
    return (
      <div>
        <h2>Component 3</h2>
        <img className="cat" src={cat3} alt="" />
        <p>
          Sup playa! Bubba Kush here. I'm here to enjoy spinning sick beats and tricking babies. I'm convinced that that one day cats will rule this planet. One day I'll prove it. I can't wait to wake you up at 4am for seemingly no reason.
        </p>
      </div>
    );
  }
}

export default Component3;
