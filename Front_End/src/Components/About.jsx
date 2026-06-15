import React from "react";
import { PiShareNetworkBold } from "react-icons/pi";
import { BsLightningChargeFill } from "react-icons/bs";
import { CgTerminal } from "react-icons/cg";
import { GiCheckedShield } from "react-icons/gi";
import { LuTrendingUp } from "react-icons/lu";

import image from "../Asessts/image.webp";
function About() {
  return (
    <div>
    <div className="grid grid-cols-3 gap-4 ml-10 mr-10">
      <div className="col-span-2 backdrop-filter backdrop-blur-lg bg-white/5 border border-white/10 p-6 shadow-xl flex flex-col justify-start ">
        <PiShareNetworkBold className="text-5xl text-[#39FF14] mb-4" />
        <h2 className="text-2xl font-bold text-white mb-2">
          Security-First Roadmap
        </h2>
        <p className="text-[#BACCB0] w-120">
          Constructive experimentation based on OWASP standards and secure
          coding. No "code-only" approach; you learn how to upload, not just how
          to write.
        </p>
        <img
          src={image}
          alt="Roadmap Illustration"
          className="mt-6 border border-[#37ff1446]"
        />
      </div>
      <div className="col-span-1 backdrop-filter backdrop-blur-lg bg-white/5 border border-white/10 p-6 shadow-xl flex flex-col justify-start ">
        <BsLightningChargeFill className="text-5xl text-[#00FFFF] mb-4" />
        <h2 className="text-2xl font-bold text-white mb-2">
          Human-in-the-loop Pentest
        </h2>
        <p className="text-[#BACCB0]  w-80 mb-10">
          Your project isn't saved by a bot. Our DevSecOps experts will perform
          a live code audit and pentest for your project within 48 hours.
        </p>
        <div className="flex flex-row justify-around gap-4">
          <p>Response</p>
          <p className="text-[#39FF14] font-bold">48 Hours</p>
        </div>
        <div className="h-0.5 w-full bg-linear-to-r from-black to-[#39FF14] mt-5 mb-10"></div>
        <div className="flex flex-row justify-around gap-4">
          <p>Accuratley</p>
          <p className="text-[#39FF14] font-bold">Unlimited</p>
        </div>
        <div className="h-0.5 w-full bg-linear-to-r from-black to-[#39FF14] mt-5"></div>
      </div>
      
    </div>
    <div className="grid grid-cols-9 gap-4 ml-10 mr-10 mt-10">
        <div className="col-span-3 backdrop-filter backdrop-blur-lg bg-white/5 border border-white/10 p-6 shadow-xl flex flex-col justify-start ">
        <CgTerminal className="text-5xl text-[#BACCB0] mb-4" />
        <h2 className="text-2xl font-bold text-white mb-2">Decay-Based Leaderboard</h2>
        <p className="text-[#BACCB0]  w-90">
          Your place at the top is not guaranteed. The ranking system automatically applies Decay; keep building or lose your ranking. Achievement is an ongoing journey.
        </p>
      </div>
      <div className="col-span-3 backdrop-filter backdrop-blur-lg bg-white/5 border border-white/10 p-6 shadow-xl flex flex-col justify-start ">
        <GiCheckedShield className="text-5xl text-[#BACCB0] mb-4" />
        <h2 className="text-2xl font-bold text-white mb-2">Verified Security Badge</h2>
        <p className="text-[#BACCB0]  w-90">
          A digital, encrypted badge, verifiable on LinkedIn. Live, documented proof that your code has undergone a real penetration test.
        </p>
      </div>
      <div className="col-span-3 backdrop-filter backdrop-blur-lg bg-white/5 border border-white/10 p-6 shadow-xl flex flex-col justify-start ">
        <LuTrendingUp className="text-5xl text-[#BACCB0] mb-4" />
        <h2 className="text-2xl font-bold text-white mb-2">High-Signal Network</h2>
        <p className="text-[#BACCB0]  w-90">
            A community comprised solely of proven developers. Access to the platform means joining the elite of Secure Coders.
        </p>
      </div>
    </div>
    </div>
  );
}

export default About;
