import React from "react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ReactGA from "react-ga4";
import { useEffect } from "react";

const TRACKING_ID = "G-R02F73TV4H";
ReactGA.initialize(TRACKING_ID);
function App() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white font-sans w-full mx-auto">
      <main>
        <NavBar />
        <Hero />
        <div className="h-0.5 w-full bg-linear-to-r from-black to-[#39FF14] mt-16 sm:mt-24 md:mt-40 mb-16 sm:mb-24 md:mb-40"></div>
        <About />
        <div className="h-0.5 w-full bg-linear-to-r from-black to-[#39FF14] mt-16 sm:mt-24 md:mt-40 mb-16 sm:mb-24 md:mb-40"></div>
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
