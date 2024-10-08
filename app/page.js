import React from "react";
import Hero from "./components/Hero";
import Price from "./components/Price";
import Layanan from "./components/Layanan";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <div>
      <Hero />
      <Layanan />
      <Price />
      <Portfolio />
    </div>
  );
}
