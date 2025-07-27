import React from "react"; // <-- Make sure this is only here ONCE!
import { image } from "../data/user"; // <-- ADD THIS LINE for named import!

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About; // <-- Make sure this is here for default export!
