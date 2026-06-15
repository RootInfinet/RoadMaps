import React from "react";
import { IoInfiniteOutline } from "react-icons/io5";
function Achivments() {
  return (
    <div className="flex flex-row justify-evenly gap-10 ml-10 mr-10 relative">
        <div className="absolute left[100px] w-100 h-70 bg-[#33e51317] -top-25 rounded-full blur-3xl"></div>
      <div className="flex flex-col justify-center items-center gap-4 z-100">
        <h1 className="text-[#39FF14] text-5xl  ">99.999%</h1>
        <p className="text-[#BACCB0] text-lg">Uptime Guarantee</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 z-100">
        <h1 className="text-[#39FF14] text-5xl  ">10M+</h1>
        <p className="text-[#BACCB0] text-lg">NODES_CONNECTED</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 z-100">
        <h1 className="text-[#39FF14] text-5xl  ">0.0ms</h1>
        <p className="text-[#BACCB0] text-lg">STATE_DRIFT</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 z-100">
        <h1 className="text-[#39FF14] text-5xl  ">
          <IoInfiniteOutline />
        </h1>
        <p className="text-[#BACCB0] text-lg">Zero-Latency Execution</p>
      </div>
    </div>
  );
}

export default Achivments;
