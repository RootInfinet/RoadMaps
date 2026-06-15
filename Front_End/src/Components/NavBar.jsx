import React from "react";
import { IoIosLock } from "react-icons/io";
function NavBar() {
  return (
    <header className="flex items-center justify-evenly flex-row bg-[#141414] h-22 fixed w-full px-10 z-100">
      <h1 className="text-[#39FF14] text-5xl font-extrabold ">
        RoadMaps
      </h1>
      <nav className="flex items-center justify-center gap-5">
        <ul className="flex space-x-8 items-center justify-center">
          <li className="hover:text-green-500 transition duration-300">
            <a
              href="/"
              className="text-[#BACCB0] hover:text-[#39FF14] transition duration-300"
            >
              Home
            </a>
          </li>
          <li
            className="flex items-center justify-center gap-2 font-semibold disabled:shadow-none text-[#BACCB0] cursor-not-allowed"
          >
            <IoIosLock className="text-lg" />
            Subscribe (soon)
          </li>
          <li className="hover:text-green-500 transition duration-300">
            <a
              href="/roodmaps"
              className="text-[#BACCB0] hover:text-[#39FF14] transition duration-300"
            >
              Roadmaps
            </a>
          </li>

          <li>
            <button className="bg-[#39FF14] hover:bg-green-600 text-black font-semibold rounded-lg transition duration-300">
              <a href="/login" className="block px-6 py-2">
                Login
              </a>
            </button>
          </li>

          <li>
            <button className="bg-[#39FF14] hover:bg-green-600 text-black font-semibold rounded-lg transition duration-300">
              <a href="/signup" className="block px-6 py-2">
                Signup
              </a>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
