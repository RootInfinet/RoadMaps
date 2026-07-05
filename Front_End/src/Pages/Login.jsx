import React from "react";
import { CgTerminal } from "react-icons/cg";
import { IoIosLock } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../Redux/UserSlice";
import api from "../api/axios";

function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("/login", credentials, {
        withCredentials: true,
      });
      if (response.status === 200) {
        alert("System Access Granted!");
        localStorage.setItem("isLoggedIn", "true");
        dispatch(loginSuccess(response.data.user));
        navigate("/profile");
      }
    } catch (error) {
      alert("Access Denied: Check your credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white font-sans relative overflow-hidden">
      {/* Decorative blurred circles - hidden on small screens */}
      <div className="hidden sm:block absolute top-1/3 -left-10 sm:-left-20 bg-[#37ff1425] w-40 sm:w-50 h-40 sm:h-50 rounded-full blur-3xl"></div>
      <div className="hidden sm:block absolute top-1/3 -right-10 sm:-right-20 bg-[#00ffff38] w-40 sm:w-50 h-40 sm:h-50 rounded-full blur-3xl"></div>

      {/* Top bar - responsive padding & text */}
      <div className="flex flex-row justify-between items-center pt-4 sm:pt-5 pb-4 sm:pb-5 px-4 sm:px-8 md:px-16 lg:px-20">
        <h1 className="text-[#39FF14] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
          <Link to="/">RoadMap</Link>
        </h1>
        <p className="text-[#BACCB0] text-xs sm:text-sm md:text-base">HELP_CENTER</p>
      </div>

      {/* Login Form Container */}
      <div className="flex flex-col justify-center items-center px-4 sm:px-6">
        <div className="backdrop-filter backdrop-blur-lg bg-white/5 border border-white/10 p-5 sm:p-6 shadow-xl flex flex-col justify-center pt-8 sm:pt-10 w-full max-w-[400px] sm:w-[400px]">
          <h2 className="text-2xl sm:text-3xl font-bold w-full">Initialize SIGN_IN</h2>
          <div className="h-0.5 w-full bg-linear-to-r from-black to-[#39FF14] mt-4 sm:mt-5 mb-4 sm:mb-5"></div>
          <h2 className="text-lg sm:text-xl font-bold">System Access</h2>
          <p className="text-[#BACCB0] pt-2 text-sm sm:text-base">
            Initialize session to access the roadmap core.
          </p>

          <form
            id="Form-Login"
            className="flex flex-col justify-start mt-4 sm:mt-5"
            onSubmit={handleLogin}
          >
            {/* Email Field */}
            <div className="relative w-full group">
              <label
                htmlFor="Email"
                className="text-[#BACCB0] text-xs sm:text-sm font-medium"
              >
                IDENTIFIER
              </label>
              <CgTerminal className="absolute top-[40px] sm:top-[47px] left-3 text-[#00FFFF] group-focus-within:text-[#37FF14] text-lg sm:text-xl transition-colors duration-300 z-10" />
              <input
                name="email"
                type="email"
                className="mt-2 py-2.5 sm:py-3 pl-10 pr-4 w-full bg-[#0A0A0A] border border-[#37ff1493] outline-none focus:border-[#37ff14] focus:ring-1 focus:ring-[#37ff14] text-white placeholder:text-white/30 text-sm sm:text-base transition-all duration-300"
                placeholder="user_id or email"
                value={credentials.email}
                onChange={handleChange}
              />
            </div>

            {/* Password Field */}
            <div className="relative w-full group mt-4 sm:mt-5 mb-2 sm:mb-3">
              <label
                htmlFor="Password"
                className="text-[#BACCB0] text-xs sm:text-sm font-medium"
              >
                SECRET_KEY
              </label>
              <IoIosLock className="absolute top-[40px] sm:top-[47px] left-3 text-[#00FFFF] group-focus-within:text-[#37FF14] text-lg sm:text-xl transition-colors duration-300 z-10" />
              <input
                name="password"
                type="password"
                className="bg-[#0A0A0A] mt-2 py-2.5 sm:py-3 pl-10 pr-4 w-full border border-[#37ff1493] outline-none focus:border-[#37ff14] focus:ring-1 focus:ring-[#37ff14] text-white placeholder:text-white/30 text-sm sm:text-base transition-all duration-300"
                placeholder="••••••••"
                value={credentials.password}
                onChange={handleChange}
              />
            </div>

            {/* Signup Link */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base">
              Don't have an account? Create an account{" "}
              <Link
                to="/signup"
                className="mb-3 hover:text-[#37FF14] duration-300 text-[#39FF14]"
              >
                here
              </Link>
            </p>

            {/* Submit Button */}
            <button
              className="py-2.5 sm:py-3 px-2 bg-[#39FF14] mt-4 sm:mt-5 text-black cursor-pointer border hover:bg-white/5 hover:border-[#39FF14] hover:text-white text-sm sm:text-base duration-300"
              type="submit"
            >
              {loading ? "INITIALIZING..." : "EXECUTE_LOGIN"}
            </button>
          </form>
        </div>
      </div>

      {/* Footer - responsive */}
      <footer className="w-full border-t border-white/10 bg-[#0a0a0a] py-6 sm:py-8 mt-8 sm:mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold tracking-tight text-sm sm:text-base">
              RoadMap
            </span>
            <span className="text-white/30 text-xs">© 2026</span>
          </div>

          <div className="flex gap-6 sm:gap-8">
            <Link
              to="/terms"
              className="text-white/50 hover:text-[#39FF14] text-xs sm:text-sm transition-colors"
              target="_blank"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="text-white/50 hover:text-[#39FF14] text-xs sm:text-sm transition-colors"
              target="_blank"
            >
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Login;
