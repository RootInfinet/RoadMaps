import React from 'react'
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import About from './Components/About';
function App() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white font-sans container mx-auto">
      <main>
      <NavBar />
      <Hero />
<div className="h-0.5 w-full bg-linear-to-r from-black to-[#39FF14] mt-40 mb-40"></div>
      <About />
      </main>

    </div>
  )
}

export default App