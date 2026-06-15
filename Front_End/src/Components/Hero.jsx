import React from 'react'

function Hero() {
    return (
        <div className='w-full flex flex-col items-center justify-center text-center pt-45'>
            <div className="font-bold  text-[#39FF14] bg-[#37ff142a] bg-opacity-10 px-4 py-2 border border-[#39FF14] text-[10px]">
                SYSTEMS_ONLINE_V1.1
            </div>
            <h1 className="text-5xl font-bold text-[#E5E2E1] mt-10 w-140 leading-14">
                THE ARCHITECTURE OF  <span className="bg-linear-to-r from-[#39FF14] to-[#00FFFF] bg-clip-text text-5xl font-extrabold text-transparent">INFINITE GROWTH</span>
            </h1>
            <p className="text-[#BACCB0] mt-6 w-140 leading-6 mb-10">
                A deep-tech infrastructure layer designed for the next generation of
                scalable intelligence. Rooted in logic, branching into infinity.
            </p>
            <div className="flex gap-8 flex-row justify-center">
            <button className="mt-8 bg-[#39FF14] px-13 py-3 text-black hover:bg-[#0A0A0A] hover:text-[#39FF14] duration-300 border hover:border-[#39FF14] cursor-pointer">
                Get Started
            </button>
            <button className="px-3 py-2 mt-8 bg-[#0A0A0A] text-[#00FFFF] duration-300 border border-[#00FFFF] cursor-pointer">
            Roadmaps
            </button>
            </div>
        </div>
    )
}

export default Hero