import React from 'react'
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
// import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from './BlurBlob';

function App() {

  const colors = {
    dark_clr: "#081d2c",
    second_dark_clr: "#112e42",
    text_clr: "#f1f5f9",
    light_text_clr: "#c9d9e8",
    global_clr: "#0fbbff",
    btn_clr: "#ff499e",
  }

  return (
    // className={`bg-[${colors.dark_clr}]`}
    <div style={{ backgroundColor: colors.dark_clr }}>
      <BlurBlob position={{top: '35%', right: '35%'}} size={{width: '30%', height: '40%'}} />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className='relative pt-20'>
        <Navbar />
        <About />
        <Skills />
        {/* <Experience /> */}
        {/* <Projects /> */}
        {/* <Education /> */}
        {/* <Contact /> */}
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default App
