import React from "react";
import Hero from "./components/Hero";
import Price from "./components/Price";
import Layanan from "./components/Layanan";

export default function Home() {
  return (
    <div>
      <Hero />
      <Layanan />
      <Price />
    </div>
  );
}
