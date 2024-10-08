import React from "react";
import Hero from "./components/Hero";
import Price from "./components/Price";
import Layanan from "./components/Layanan";
import Portfolio from "./components/Portfolio";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Layanan />
      <Price />
      <Portfolio />
      <Cta />
      <Footer />
    </>
  );
}
