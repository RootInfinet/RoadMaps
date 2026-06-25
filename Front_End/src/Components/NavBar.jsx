import React from "react";
import { IoIosLock } from "react-icons/io";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <header className="flex items-center justify-evenly flex-row bg-[#141414] h-22 fixed w-full px-10 z-100">
      <h1 className="text-[#39FF14] text-5xl font-extrabold ">
        <Link to="/">RoadMap</Link>
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
            <Link
              to="/roadmaps"
              className="text-[#BACCB0] hover:text-[#39FF14] transition duration-300"
            >
              Roadmaps
            </Link>
          </li>

          {isAuthenticated ? (
            <li>
              <Link
                to="/profile"
                className="bg-[#39FF14] hover:bg-[#141414] border hover:border-[#39FF14] hover:text-white text-black font-semibold transition duration-300 block px-6 py-2"
              >
                Profile
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  className="bg-[#39FF14] hover:bg-[#141414] border hover:border-[#39FF14] hover:text-white text-black font-semibold transition duration-300 block px-6 py-2"
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  to="/signup"
                  className="bg-[#39FF14] hover:bg-[#141414] border hover:border-[#39FF14] hover:text-white text-black font-semibold transition duration-300 block px-6 py-2"
                >
                  Signup
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
