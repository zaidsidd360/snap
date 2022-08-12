import React from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";

function Home() {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <HeroSection />
    </>
  );
}

export default Home;
