import React, { useState } from "react";
import { IoIosLock, IoMdClose, IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  const { isAuthenticated } = useSelector((state) => state.user);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between bg-[#141414] h-auto min-h-[60px] md:min-h-[80px] lg:min-h-[88px] fixed w-full px-4 sm:px-6 md:px-8 lg:px-10 z-100">
      {/* Logo - responsive sizing */}
      <h1 className="text-[#39FF14] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold shrink-0">
        <Link to="/">RoadMap-Tech</Link>
      </h1>

      {/* Desktop Navigation - hidden on mobile */}
      <nav className="hidden md:flex items-center justify-center gap-5">
        <ul className="flex items-center justify-center gap-4 lg:gap-8">
          <li>
            <Link
              to="/"
              className="text-sm lg:text-base text-[#BACCB0] hover:text-[#39FF14] transition duration-300 whitespace-nowrap"
            >
              Home
            </Link>
          </li>
          <li className="flex items-center justify-center gap-1 lg:gap-2 font-semibold text-sm lg:text-base text-[#BACCB0] cursor-not-allowed whitespace-nowrap">
            <IoIosLock className="text-base lg:text-lg" /> soon
          </li>
          <li>
            <Link
              to="/roadmaps"
              className="text-sm lg:text-base text-[#BACCB0] hover:text-[#39FF14] transition duration-300 whitespace-nowrap"
            >
              Roadmaps
            </Link>
          </li>

          {isAuthenticated ? (
            <li>
              <Link
                to="/profile"
                className="text-sm lg:text-base text-[#BACCB0] hover:text-[#39FF14] transition duration-300 whitespace-nowrap"
              >
                Profile
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  className="inline-block bg-[#39FF14] hover:bg-[#141414] border border-[#39FF14] hover:text-white text-black text-sm lg:text-base font-semibold transition duration-300 px-4 lg:px-6 py-1.5 lg:py-2 whitespace-nowrap"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="inline-block bg-[#39FF14] hover:bg-[#141414] border border-[#39FF14] hover:text-white text-black text-sm lg:text-base font-semibold transition duration-300 px-4 lg:px-6 py-1.5 lg:py-2 whitespace-nowrap"
                >
                  Signup
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-[#39FF14] text-2xl p-2 focus:outline-none cursor-pointer z-110"
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {mobileMenuOpen ? <IoMdClose /> : <IoMdMenu />}
      </button>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/60 z-90 md:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Mobile Navigation Panel */}
      <nav
        className={`fixed top-0 right-0 h-full w-3/4 max-w-[280px] bg-[#141414] border-l border-zinc-800 z-100 transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col pt-20 px-6 gap-2">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-[#BACCB0] hover:text-[#39FF14] transition duration-300 py-3 border-b border-zinc-800"
          >
            Home
          </Link>
          <div className="flex items-center gap-2 text-base text-[#BACCB0] py-3 border-b border-zinc-800 cursor-not-allowed">
            <IoIosLock className="text-lg" /> soon
          </div>
          <Link
            to="/roadmaps"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-[#BACCB0] hover:text-[#39FF14] transition duration-300 py-3 border-b border-zinc-800"
          >
            Roadmaps
          </Link>

          {isAuthenticated ? (
            <Link
              to="/profile"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-[#BACCB0] hover:text-[#39FF14] transition duration-300 py-3 border-b border-zinc-800"
            >
              Profile
            </Link>
          ) : (
            <div className="flex flex-col gap-3 pt-4">
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center bg-[#39FF14] hover:bg-[#141414] border border-[#39FF14] hover:text-white text-black font-semibold transition duration-300 py-2.5 rounded"
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center bg-[#39FF14] hover:bg-[#141414] border border-[#39FF14] hover:text-white text-black font-semibold transition duration-300 py-2.5 rounded"
              >
                Signup
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
