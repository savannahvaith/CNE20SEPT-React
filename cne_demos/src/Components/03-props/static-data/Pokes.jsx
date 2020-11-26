import React from "react";
import Poke from "./Poke.json";
const Pokes = () => {
  return (
    <>
      {Poke.map((individual) => (
        <>
          <p>Name: {individual.name}</p>
          <a href={individual.url}>Find out more</a>
          <img/>
          <a><b></b></a>
        </>
      ))}
    </>
  );
};
export default Pokes;
