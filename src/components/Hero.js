import React from "react";
import collage from "../assets/collage.png";

export default function Hero() {
  return (
    <section className="hero">
      <img src={collage} className="hero--photo"></img>
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--body">
        Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home.
      </p>
    </section>
  );
}
