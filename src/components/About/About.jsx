import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/myProfile.png'

const About = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 500); // typingDelay = 500ms
    return () => clearTimeout(timer);
  }, []);
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px[20vw] font-sans mt-12 md:mt-16 lg:mt-20"
    >
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-4 mb-10 ml-3">
          <Tilt 
            className="w-48 h-48 sm:w-64 sm:h-64 md:h-[30rem] md:w-[30rem] border-4 border-global-clr rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img src={profileImage} alt="Vivek's Image" 
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(15,187,255,0.5)]"
            />
          </Tilt>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 text-center md:text-left ml-15 mr-10 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-dark-text mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-dark-text mb-4 leading-tight">
            Vivek Kumar
          </h2>
          {/* Skills heading with typing effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-global-clr leading-tight">
            <span className="text-dark-text">I am a </span>
            {show && <Typewriter
              words={[
                "Fullstack Developer",
                "App Developer",
                "UI/UX Designer",
                "Coder",
              ]}
              loop={0}
              cursor
              cursorStyle={<span className="text-accent-light">|</span>}
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />}
          </h3>
          {/* About me paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-dark-para mb-10 mt-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ratione maiores recusandae tempore quas error, cum ipsum qui
            numquam obcaecati? Neque rerum tempora magnam similique molestias 
            dolor voluptatibus aut tempore tenetur!
          </p>
          {/* Resume Button */}
          <a href="https://drive.usercontent.google.com/u/0/uc?id=10VW__PPh_4z0U2oH5RNE28WRpJ8lejp_&export=download" rel="noopener noreferrer"
            className="inline-block text-dark-text py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #ff499e, #f25ea3)',
              boxShadow: '0 0 2px #ff499e, 0 0 2px #ff499e, 0 0 40px #ff499e',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
