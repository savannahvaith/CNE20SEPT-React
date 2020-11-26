import React from "react";

import Jokes from "./Banter.json";
import Joke from "./Joke";

const Display = () => {
  console.log(Jokes);
  return (
    <>
      <h1> Have a look at these... </h1>

      {Jokes.map((joke) => (
        <Joke key={joke.id} setUp={joke.setup} punchline={joke.punchline}/>
      ))}
    </>
  );
};

export default Display;
