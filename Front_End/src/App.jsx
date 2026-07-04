import React from "react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white font-sans container mx-auto">
      <main>
        <NavBar />
        <Hero />
        <div className="h-0.5 w-full bg-linear-to-r from-black to-[#39FF14] mt-40 mb-40"></div>
        <About />
        <div className="h-0.5 w-full bg-linear-to-r from-black to-[#39FF14] mt-40 mb-40"></div>
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
