import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div>About
    <h2>About me</h2>
    <p>wow JSX is nice</p>
    <img src={image} alt="I made this"></img>
  </div>
  );
}

export default About;
