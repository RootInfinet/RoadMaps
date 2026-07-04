import React from "react";
import { CgTerminal } from "react-icons/cg";
import { IoIosLock } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Signup() {
  const [credentials, setCredentials] = useState({ email: "", password: "", name: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/register", credentials);
      if (response.status === 200) {
        console.log("Access Granted, Navigating...");
        navigate("/login");
      }
    } catch (error) {
      alert("Access Denied: Check your credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white font-sans relative overflow-hidden">
      <div className="absolute top-50 -left-10 bg-[#37ff1425] w-50 h-50 rounded-full blur-3xl"></div>
      <div className="absolute top-50 -right-10 bg-[#00ffff38] w-50 h-50 rounded-full blur-3xl"></div>
      <div className="flex flex-row justify-between items-center pt-5 ml-20 mr-20 pb-5">
<h1 className="text-[#39FF14] text-5xl font-extrabold ">
        <Link to="/">RoadMap</Link>
      </h1>
        <p className="text-[#BACCB0]">HELP_CENTER</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="backdrop-filter backdrop-blur-lg bg-white/5 border border-white/10 p-6 shadow-xl flex flex-col justify-center pt-10 w-100  ">
          <h2 className="text-3xl font-bold w-full">Initialize Registration</h2>
          <div className="h-0.5 w-full bg-linear-to-r from-black to-[#39FF14] mt-5 mb-5"></div>
          <h2 className="text-xl font-bold">System Access</h2>
          <p className="text-[#BACCB0] pt-2">
            Initialize session to access the roadmap core.
          </p>
          <form
            id="Form-Login"
            className="flex flex-col justify-start mt-5"
            onSubmit={handleSignUp}
          >
            <div className="relative w-90 group">
              <label
                htmlFor="Email"
                className="text-[#BACCB0] text-sm font-medium"
              >
                IDENTIFIER
              </label>

              <CgTerminal className="absolute top-12 left-3 text-[#00FFFF] group-focus-within:text-[#37FF14] text-xl transition-colors duration-300 z-10" />

              <input
                type="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                className="mt-2 py-3 pl-10 pr-4 w-full bg-[#0A0A0A] border border-[#37ff1493] outline-none focus:border-[#37ff14] focus:ring-1 focus:ring-[#37ff14] text-white placeholder:text-white/30 transition-all duration-300"
                placeholder="user_id or email"
              />
            </div>
            <div className="relative w-90 group mt-5">
              <label
                htmlFor="Password"
                className="text-[#BACCB0] text-sm font-medium"
              >
                SECRET_KEY
              </label>

              <IoIosLock className="absolute top-12 left-3 text-[#00FFFF] group-focus-within:text-[#37FF14] text-xl transition-colors duration-300 z-10" />

              <input
                name="password"
                value={credentials.password}
                onChange={handleChange}
                type="password"
                className="bg-[#0A0A0A] mt-2 py-3 pl-10 pr-4 w-full border border-[#37ff1493] outline-none focus:border-[#37ff14] focus:ring-1 focus:ring-[#37ff14] text-white placeholder:text-white/30 transition-all duration-300"
                placeholder="••••••••"
              />
            </div>
            <div className="relative w-90 group mt-5 mb-3">
              <label
                htmlFor="name"
                className="text-[#BACCB0] text-sm font-medium"
              >
                IDENTITY_NAME
              </label>

              <FaUser className="absolute top-12 left-3 text-[#00FFFF] group-focus-within:text-[#37FF14] text-xl transition-colors duration-300 z-10" />

              <input
                name="name"
                value={credentials.name}
                onChange={handleChange}
                type="text"
                className="bg-[#0A0A0A] mt-2 py-3 pl-10 pr-4 w-full border border-[#37ff1493] outline-none focus:border-[#37ff14] focus:ring-1 focus:ring-[#37ff14] text-white placeholder:text-white/30 transition-all duration-300"
                placeholder="Enter Your Name "
              />
            </div>
            <p className="mt-5">
              Already have an access? Login{" "}
              <Link
                to="/login"
                className="mb-3 hover:text-[#37FF14] duration-300"
              >
                here
              </Link>
            </p>
            <button
              type="submit"
              className="py-3 px-2 bg-[#39FF14] mt-5 text-black cursor-pointer border hover:bg-white/5 hover:border-[#39FF14] hover:text-white duration-300"
            >
              EXECUTE_REGISTRATION
            </button>
          </form>
        </div>
      </div>
      <footer className="w-full border-t border-white/10 bg-[#0a0a0a] py-8 mt-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold tracking-tight">
              RoadMap
            </span>
            <span className="text-white/30 text-xs">© 2026</span>
          </div>

          <div className="flex gap-8">
            <Link
              to="/terms"
              className="text-white/50 hover:text-[#39FF14] text-sm transition-colors"
              target="_blank"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="text-white/50 hover:text-[#39FF14] text-sm transition-colors"
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

export default Signup;
