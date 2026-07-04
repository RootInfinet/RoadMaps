import React, { useState,useEffect  } from 'react';
import Navbar from '../Components/NavBar';
import { FiSearch } from "react-icons/fi";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function Roadmaps() {
  const [searchTerm, setSearchTerm] = useState('');
const navigate = useNavigate();
  const initialRoadmaps = [
    {
      id: 1,
      title: "Frontend Development",
      subtitle: "(Security By Design)",
      description: "Master the essentials of frontend engineering while implementing secure coding practices against client-side vulnerabilities.",
      steps: "10 Steps"
    }
  ];
 const handleStartRoadmap = async (roadmap) => {
  try {    await axios.post("http://localhost:5000/enroll", {
      roadmapId: String(roadmap.id), 
      roadmapTitle: roadmap.title,   
      status: "in-progress"
    }, {
      withCredentials: true 
    });

    console.log("Registration for roadmap successful");
    navigate(`/roadmaps/${roadmap.id}`);

  } catch (error) {
    console.error("Something went wrong:", error);
    navigate(`/roadmaps/${roadmap.id}`);
  }
};

  const filteredRoadmaps = initialRoadmaps.filter(roadmap => 
    roadmap.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    roadmap.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="bg-[#0A0A0A] min-h-screen text-white font-sans pt-28 pb-20">
        
        <div className="max-w-2xl mx-auto px-4 flex flex-col">
          <h2 className="text-3xl font-extrabold text-white text-center">
            Search For <span className="text-[#39FF14]">RoadMap</span>
          </h2>
          <p className="text-slate-400 text-sm mt-2 text-center leading-relaxed">
            Explore a variety of roadmaps to enhance your skills and knowledge in different domains. Find the perfect roadmap that suits your learning journey and helps you achieve your goals.
          </p>

          <div className="relative mt-6 group">
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-400 group-focus-within:text-[#39FF14] transition-colors duration-300">
              <FiSearch className="text-xl" />
            </div>

            <input
              type="text"
              placeholder="Search for a roadmap..."
              className="w-full bg-[#141414] text-white placeholder-slate-500 text-sm rounded-xl border border-slate-800 pr-12 pl-4 py-3.5 outline-none transition-all duration-300 focus:border-[#39FF14] focus:ring-1 focus:ring-[#39FF14]/30 focus:shadow-[0_0_15px_rgba(57,255,20,0.1)]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#39FF14]/50 to-transparent mt-10"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 mt-12">
          {filteredRoadmaps.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="roadmap-cards">
              {filteredRoadmaps.map((roadmap) => (
                <div 
                  key={roadmap.id} 
                  className="p-6 bg-[#141414] rounded-2xl border border-zinc-800 hover:border-[#39FF14] hover:shadow-[0_4px_25px_rgba(57,255,20,0.05)] transition-all duration-300 flex flex-col justify-between h-56 text-left"
                >
                  <div>
                    <h3 className="font-extrabold text-xl text-white tracking-wide">
                      {roadmap.title} 
                      <span className="text-[#39FF14] text-sm block mt-1 font-medium tracking-normal">
                        {roadmap.subtitle}
                      </span>
                    </h3>
                    <p className="text-gray-400 text-xs mt-3 leading-relaxed line-clamp-3">
                      {roadmap.description}
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-zinc-900">
  <span className="text-[10px] text-gray-500 font-mono">{roadmap.steps} steps</span>
  
  <button 
    onClick={() => handleStartRoadmap(roadmap)} 
    className="text-xs font-semibold text-[#39FF14] hover:underline cursor-pointer bg-transparent border-none"
  >
    View Path &rarr;
  </button>
</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-slate-500 text-sm mt-10">
              No roadmaps found for "{searchTerm}"
            </div>
          )}
        </div>

      </div>
    </>
  );
}

export default Roadmaps;