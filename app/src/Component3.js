import React, { Component } from "react";
import cat3 from "./catImages/44215.svg";

class Component3 extends Component {
  render() {
    return (
      <div>
        <h2>Component 3</h2>
        <img class="cat" src={cat3} alt="" />		
      </div>
    );
  }
}

export default Component3;
