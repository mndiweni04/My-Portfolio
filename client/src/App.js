import React, { useEffect, useState } from "react";
import './App.css';
import CoverPg from "./pages/js/cover-page";
import AboutMe from "./pages/js/aboutme";
import Projects from "./pages/js/projects";
import DevTools from "./pages/js/devTools";
import ReachMe from "./pages/js/reachme";

function App(){
    const [showNavbar, setShowNavbar] = useState(true);
    let lastScrollY = 0;
  
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // Scrolling down → hide
      } else {
        setShowNavbar(true); // Scrolling up → show
      }
      lastScrollY = window.scrollY;
    };
  
    useEffect(() => {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="wrap">
            <nav className={`navbar ${showNavbar ? 'visible' : 'hidden'}`}>
                <a href="#cover">Home</a>
                <a href="#about">About Me</a>
                <a href="#projects">Projects</a>
                <a href="#tools">Dev Tools</a>
                <a href="#contact">Contact</a>
            </nav>

            <div className="scroll-container">
                <div id="cover"><CoverPg /></div>
                <div id="about"><AboutMe /></div>
                <div id="projects"><Projects /></div>
                <div id="tools"><DevTools /></div>
                <div id="contact"><ReachMe /></div>
            </div>
            <div className="pgFooter">
              <p className="CopyRight">© 2025 Mandla Ndiweni. All Rights Reseverd</p>
            </div>
        </div>
    );
}

export default App;