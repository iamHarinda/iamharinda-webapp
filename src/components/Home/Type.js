import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer", 
          "Graphics Designer", 
          "Social Media Manager", 
          "Online Entrepreneur", 
          "Social Influencer", 
          "Radio Broadcaster",
          "Blog Writer", 

        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
