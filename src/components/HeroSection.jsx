import React from "react";
import ImageHeroMobile from "../assets/image-hero-mobile.png";
import ImageHeroDesktop from "../assets/image-hero-desktop.png";
import AudioPhile from "../assets/client-audiophile.svg";
import DataBiz from "../assets/client-databiz.svg";
import Maker from "../assets/client-maker.svg";
import Meet from "../assets/client-meet.svg";

const HeroSection = () => {
  return (
    <div className="md:flex md:justify-center md:items-center md:h-[80vh]">
      <div className="top-15 absolute md:flex md:flex-row-reverse md:items-end md:justify-between md:w-[70vw] md:pt-16">
        <div className="md:w-[500px]">
          <img className="md:hidden" src={ImageHeroMobile} alt="hero" />
          <img
            className="hidden md:flex md:h-[70vh] md:w-auto"
            src={ImageHeroDesktop}
            alt="hero"
          />
        </div>
        <div className="flex flex-col items-stretch">
          <div className="md:max-w-[600px]">
            <h1 className="w-full text-center font-bold text-4xl mt-8 mb-4 px-2 md:text-left md:text-8xl md:mt-0 md:w-[480px] md:px-0">
              Make
            </h1>
            <h1 className="w-full text-center font-bold text-4xl mt-8 mb-4 px-2 md:text-left md:text-8xl md:mt-0 md:w-[600px] md:px-0">
              remote work
            </h1>
            <p className="w-full text-center text-medium-gray font-medium p-1 text-lg md:text-left md:pr-32 md:my-12 md:text-lg">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
          </div>
          <div className="w-full text-white flex justify-center my-5 md:justify-start">
            <button className="bg-black px-6 py-3 rounded-xl font-medium hover:bg-white hover:text-black hover: border border-black">
              Learn More
            </button>
          </div>
          <div className="flex items-center justify-evenly w-full mt-10 md:justify-start md:mt-20">
            <img className="w-16 h-auto mx-2 md:w-20" src={DataBiz} alt="" />
            <img
              className="w-14 h-auto mx-2 md:ml-8 md:w-16"
              src={AudioPhile}
              alt=""
            />
            <img
              className="w-16 h-auto mx-2 md:ml-8 md:w-20"
              src={Meet}
              alt=""
            />
            <img
              className="w-16 h-auto mx-2 md:ml-8 md:w-20"
              src={Maker}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
