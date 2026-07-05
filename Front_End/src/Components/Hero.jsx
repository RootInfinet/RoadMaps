import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <div className='w-full flex flex-col items-center justify-center text-center pt-32 sm:pt-36 md:pt-45 px-4 sm:px-6'>
            <div className="font-bold text-[#39FF14] bg-[#37ff142a] bg-opacity-10 px-3 sm:px-4 py-1.5 sm:py-2 border border-[#39FF14] text-[8px] sm:text-[10px]">
                SYSTEMS_ONLINE_V1.1
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#E5E2E1] mt-6 sm:mt-8 md:mt-10 max-w-[90vw] sm:max-w-[560px] md:w-140 leading-tight sm:leading-14">
                THE ARCHITECTURE OF  <span className="bg-linear-to-r from-[#39FF14] to-[#00FFFF] bg-clip-text text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent">INFINITE GROWTH</span>
            </h1>
            <p className="text-[#BACCB0] mt-4 sm:mt-6 max-w-[90vw] sm:max-w-[560px] md:w-140 leading-5 sm:leading-6 mb-6 sm:mb-10 text-sm sm:text-base">
                A deep-tech infrastructure layer designed for the next generation of
                scalable intelligence. Rooted in logic, branching into infinity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center w-full max-w-xs sm:max-w-none">
                <button className="w-full sm:w-auto bg-[#39FF14] px-10 sm:px-13 py-2.5 sm:py-3 text-black hover:bg-[#0A0A0A] hover:text-[#39FF14] duration-300 border hover:border-[#39FF14] cursor-pointer text-sm sm:text-base">
                    Get Started
                </button>
                <Link to="/roadmaps" className="w-full sm:w-auto text-center px-3 py-2.5 sm:py-2 bg-[#0A0A0A] text-[#00FFFF] duration-300 border border-[#00FFFF] cursor-pointer inline-block text-sm sm:text-base">
                    Roadmaps
                </Link>
            </div>
        </div>
    )
}

export default Hero
