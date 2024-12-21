import React from "react";
import Tooltip from "../components/Tooltip";

const Hero = () => {
  return (
    <div
      className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
      data-aos="fade-right"
      data-aos-duration="800"
      id="home"
    >
      <div className="pr-2 md:mb-14 py-14 md:py-0">
        <h4 className="text-lg font-semibold text-white xl:text-2xl">
          Hey There
        </h4>
        <h1 className="xl:text-7xl lg:text7xl md:text-7xl sm:text-6xl text-4xl font-semibold font-serif mt-2 text-white flex items-center space-x-2">
          <span>I'm</span>
          <span>Mubasir</span>
        </h1>

        <h1 className="xl:text-7xl lg:text7xl md:text-7xl sm:text-6xl text-4xl font-semibold font-serif text-white">
          V C
        </h1>
        <h4 className="text-blue-600 mt-4 lg:text-2xl">
          --Full Stack Developer. Tech Enthusiast.
        </h4>
        <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
          Experienced full-stack developer with 2+ years of expertise in
          JavaScript, React, Next.js, Node.js, NestJS, and some React Native
          experience.
        </p>
        <div className="mt-4">
          <a
            href="#contact"
            className="px-5 py-3 text-lg tracking-wider text-white bg-blue-600 rounded-lg md:px-8 hover:bg-blue-500 group"
          >
            <span>Get in touch</span>{" "}
          </a>
          <div className="flex gap-5 mt-10 ml-0 md:ml-3">
            <Tooltip title="linkedin">
              <a href="https://www.linkedin.com/in/mubasir-vc/" className="">
                <img
                  src="./assets/linkedin.png"
                  alt="linkedin"
                  className="w-5 h-5 md:w-6 md:h-6 transform transition-transform duration-300 hover:scale-110"
                />
              </a>
            </Tooltip>
            <Tooltip title="github">
              <a href="https://github.com/mubasirvc">
                <img
                  src="./assets/github.svg"
                  alt="github"
                  className="w-5 h-5 md:w-6 md:h-6 transform transition-transform duration-300 hover:scale-110"
                />
              </a>
            </Tooltip>
            <Tooltip title="leetcode">
              <a href="https://leetcode.com/u/mubasirvc/">
                <img
                  src="./assets/leetcode.svg"
                  alt="leetcode"
                  className="w-5 h-5 md:w-6 md:h-6 transform transition-transform duration-300 hover:scale-110"
                />
              </a>
            </Tooltip>
            <Tooltip title="Resume">
              <a href="https://leetcode.com/u/mubasirvc/">
                <img
                  src="./assets/user-profile.png"
                  alt="resume"
                  className="w-5 h-5 md:w-6 md:h-6 transform transition-transform duration-300 hover:scale-110"
                />
              </a>
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
        <img
          id="heroImg1"
          className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
          src="mubasirvc.png"
          alt="Awesome hero page image"
          width="500"
          height="488"
        />
      </div>
    </div>
  );
};

export default Hero;
