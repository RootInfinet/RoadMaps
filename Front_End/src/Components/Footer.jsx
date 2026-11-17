import React from 'react'

function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0a0a0a] py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
        
        <div className="flex items-center gap-2">
          <span className="text-white font-bold tracking-tight text-sm sm:text-base">RoadMap-Tech</span>
          <span className="text-white/30 text-xs">© 2026</span>
        </div>

        <div className="flex gap-4 sm:gap-6 md:gap-8 items-center">
          <a href="/privacy" className="text-white/50 hover:text-[#39FF14] text-xs sm:text-sm transition-colors">Privacy</a>
          <a href="/terms" className="text-white/50 hover:text-[#39FF14] text-xs sm:text-sm transition-colors">Terms</a>
          <a href="/docs" className="text-white/50 hover:text-[#39FF14] text-xs sm:text-sm transition-colors">Docs</a>
          
          <div className="flex items-center gap-4 ml-2 border-l border-white/10 pl-4">
            <a 
              href="https://www.facebook.com/profile.php?id=61591683680714&locale=ar_AR" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/50 hover:text-[#39FF14] transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <a 
              href="https://www.linkedin.com/company/roadmaps-tech/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/50 hover:text-[#39FF14] transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer