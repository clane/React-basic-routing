import React, { Component } from "react";
import cat1 from "./catImages/293931.svg";

class Component1 extends Component {
  render() {
    return (
      <div>
        <h2>Component 1</h2>
        <img className="cat" src={cat1} alt="" />
        <p>
          Good day! I'm Casper Jumpy. I want to live in a world where people believe the world is flat. In my free time, I can usually be found tantalizing or prank-calling celebrities. This will be an amewsing friendship.
        </p>
      </div>
    );
  }
}

export default Component1;
