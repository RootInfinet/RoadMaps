import React from 'react'

function Contact() {
  return (
    <div className='flex flex-col justify-center items-center gap-4 min-h-[60vh] sm:min-h-screen px-4 sm:px-6'>
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-6 sm:p-8 md:p-12 shadow-2xl rounded-2xl w-full max-w-3xl flex flex-col justify-center items-center gap-4 sm:gap-6">
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center">
          Ready to scale beyond limits?
        </h2>
        
        <p className="text-gray-400 text-center text-sm sm:text-base max-w-md">
          Join 5,000+ developers building the future on RoadMap-Tech. No credit card required to start.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full max-w-lg">
          <input 
            type="email" 
            placeholder="developer@root.infinite" 
            className="w-full h-12 sm:h-14 px-4 bg-[#1a1a1a] text-white border border-[#39FF14]/50 focus:border-[#39FF14] focus:outline-none transition-all duration-300 text-sm sm:text-base" 
          />
          <button className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 bg-[#39FF14] text-black font-bold hover:bg-black hover:text-[#39FF14] border border-[#39FF14] transition-all duration-300 cursor-pointer text-sm sm:text-base">
            GENERATE_KEY
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default Contact;
