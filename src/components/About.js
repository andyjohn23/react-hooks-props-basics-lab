import React from "react";
import Links from "./Links";

function About(props) {
  const getBio = props.bio
  return (
    <div id="about">
      <h2>About Me</h2>
      {getBio ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} linkedin={props.links.linkedin} />
    </div>
  );
}

export default About;
