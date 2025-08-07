import React from "react";
import { ReactTyped } from "react-typed";
import { FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";
import profileImage from "../assets/profileImage.JPG";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex items-center relative"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-evenly	 relative z-10">
        <img
          src={profileImage}
          alt="Vamshi Krishna Kothakonda"
          // className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full shadow-md border-2 border-white object-cover"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full shadow-md border-4 border-white object-cover object-[center_15%]"
          // className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full shadow-md border-1 border-white object-cover object-[center_15%]"
        />
        <div className="md:w-1/2 text-center md:text-left relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Vamshi Krishna Kothakonda
          </h1>
          <ReactTyped
            className="text-xl md:text-2xl font-light mb-4"
            strings={[
              "Full Stack Developer",
              "MERN Stack Developer",
              "Software Development Engineer-SDE",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
          <p className="mb-6">
            Transforming ideas into reality through technology. With a focus on
            innovation, I build and deploy scalable web applications and machine
            learning models that solve real-world problems.
          </p>
          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="https://www.linkedin.com/in/vamshikothakonda/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 text-3xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/VamshiKothakonda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 text-3xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://medium.com/@vamshikrishnakothakonda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 text-3xl"
            >
              <FaMedium size={30} />
            </a>
          </div>
          <div className="flex justify-center md:justify-start space-x-8 mt-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold">5+</h2>
              <p>Years of Experience</p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold">5+</h2>
              <p>Projects Completed</p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold">6+</h2>
              <p>Certifications</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-gray-900 opacity-50 z-0"></div>
    </section>
  );
};

export default Hero;
