import React from 'react'

function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0a0a0a] py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
        
        <div className="flex items-center gap-2">
          <span className="text-white font-bold tracking-tight text-sm sm:text-base">RoadMap-Tech</span>
          <span className="text-white/30 text-xs">© 2026</span>
        </div>

        <div className="flex gap-4 sm:gap-6 md:gap-8">
          <a href="/privacy" className="text-white/50 hover:text-[#39FF14] text-xs sm:text-sm transition-colors">Privacy</a>
          <a href="/terms" className="text-white/50 hover:text-[#39FF14] text-xs sm:text-sm transition-colors">Terms</a>
          <a href="/docs" className="text-white/50 hover:text-[#39FF14] text-xs sm:text-sm transition-colors">Docs</a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
