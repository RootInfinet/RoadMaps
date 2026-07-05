import React from "react";
import { PiShareNetworkBold } from "react-icons/pi";
import { BsLightningChargeFill } from "react-icons/bs";
import { CgTerminal } from "react-icons/cg";
import { GiCheckedShield } from "react-icons/gi";
import { LuTrendingUp } from "react-icons/lu";

import image from "../Asessts/image.webp";

function About() {
  return (
    <div className="px-4 sm:px-6 md:px-10">
      {/* Top Row: Security-First Roadmap + Human-in-the-loop Pentest */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Security-First Roadmap - spans 2 cols on desktop */}
        <div className="md:col-span-2 backdrop-filter backdrop-blur-lg bg-white/5 border border-white/10 p-5 sm:p-6 shadow-xl flex flex-col justify-start">
          <PiShareNetworkBold className="text-4xl sm:text-5xl text-[#39FF14] mb-3 sm:mb-4" />
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Security-First Roadmap
          </h2>
          <p className="text-[#BACCB0] text-sm sm:text-base max-w-full md:max-w-[480px]">
            Constructive experimentation based on OWASP standards and secure
            coding. No "code-only" approach; you learn how to upload, not just how
            to write.
          </p>
          <img
            src={image}
            alt="Roadmap Illustration"
            className="mt-4 sm:mt-6 border border-[#37ff1446] w-full h-auto"
          />
        </div>

        {/* Human-in-the-loop Pentest */}
        <div className="backdrop-filter backdrop-blur-lg bg-white/5 border border-white/10 p-5 sm:p-6 shadow-xl flex flex-col justify-start">
          <BsLightningChargeFill className="text-4xl sm:text-5xl text-[#00FFFF] mb-3 sm:mb-4" />
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Human-in-the-loop Pentest
          </h2>
          <p className="text-[#BACCB0] text-sm sm:text-base mb-6 sm:mb-10">
            Your project isn't saved by a bot. Our DevSecOps experts will perform
            a live code audit and pentest for your project within 48 hours.
          </p>
          <div className="flex flex-row justify-between gap-4">
            <p className="text-sm sm:text-base">Response</p>
            <p className="text-[#39FF14] font-bold text-sm sm:text-base">48 Hours</p>
          </div>
          <div className="h-0.5 w-full bg-linear-to-r from-black to-[#39FF14] mt-4 sm:mt-5 mb-6 sm:mb-10"></div>
          <div className="flex flex-row justify-between gap-4">
            <p className="text-sm sm:text-base">Accuratley</p>
            <p className="text-[#39FF14] font-bold text-sm sm:text-base">Unlimited</p>
          </div>
          <div className="h-0.5 w-full bg-linear-to-r from-black to-[#39FF14] mt-4 sm:mt-5"></div>
        </div>
      </div>

      {/* Bottom Row: 3 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 sm:mt-10">
        <div className="backdrop-filter backdrop-blur-lg bg-white/5 border border-white/10 p-5 sm:p-6 shadow-xl flex flex-col justify-start">
          <CgTerminal className="text-4xl sm:text-5xl text-[#BACCB0] mb-3 sm:mb-4" />
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Decay-Based Leaderboard</h2>
          <p className="text-[#BACCB0] text-sm sm:text-base">
            Your place at the top is not guaranteed. The ranking system automatically applies Decay; keep building or lose your ranking. Achievement is an ongoing journey.
          </p>
        </div>
        <div className="backdrop-filter backdrop-blur-lg bg-white/5 border border-white/10 p-5 sm:p-6 shadow-xl flex flex-col justify-start">
          <GiCheckedShield className="text-4xl sm:text-5xl text-[#BACCB0] mb-3 sm:mb-4" />
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Verified Security Badge</h2>
          <p className="text-[#BACCB0] text-sm sm:text-base">
            A digital, encrypted badge, verifiable on LinkedIn. Live, documented proof that your code has undergone a real penetration test.
          </p>
        </div>
        <div className="backdrop-filter backdrop-blur-lg bg-white/5 border border-white/10 p-5 sm:p-6 shadow-xl flex flex-col justify-start">
          <LuTrendingUp className="text-4xl sm:text-5xl text-[#BACCB0] mb-3 sm:mb-4" />
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">High-Signal Network</h2>
          <p className="text-[#BACCB0] text-sm sm:text-base">
            A community comprised solely of proven developers. Access to the platform means joining the elite of Secure Coders.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
