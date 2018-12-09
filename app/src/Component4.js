import React, { Component } from "react";
import cat4 from "./catImages/288702.svg";

class Component4 extends Component {
  render() {
    return (
      <div>
        <h2>Component 4</h2>
        <img className="cat" src={cat4} alt="" />
        <p>
          What's up! I'm Kitty #288702. I'm a professional Culinary Sanitation Specialist and I love lasagna. When I'm not riding the bus, I'm siring for status! We're so fur-tunate to have found each other!
        </p>
      </div>
    );
  }
}

export default Component4;
