'use client'

import React from "react";
import Hero from "./components/Hero";
import Price from "./components/Price";
import Layanan from "./components/Layanan";
import Portfolio from "./components/Portfolio";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
        duration: 2000, // Durasi animasi dalam milidetik (opsional)
    });
}, []);
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
