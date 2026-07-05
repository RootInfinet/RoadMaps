import React, { useMemo, useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import RoadmapSidebar from "../Components/RoadmapSidebar";
import { FiCheck, FiLock, FiInfo } from "react-icons/fi";
import { useSelector } from "react-redux";
import api from "../api/axios";
import {
  frontEndRoadmap,
  ROADMAP_TITLE,
} from "../data/frontEndRoadmap";

function Roadmapview() { 
  const { user } = useSelector((state) => state.user);
  const [activePhase, setActivePhase] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedStep, setSelectedStep] = useState(null);

  const [completedSteps, setCompletedSteps] = useState({});
  const [backendProgress, setBackendProgress] = useState({ completedCount: 0, progressPercentage: 0 });

  const allSteps = useMemo(
    () => frontEndRoadmap.flatMap((p) => p.steps),
    []
  );
  const totalSteps = allSteps.length;

  const roadmapId = 1; 

  useEffect(() => {
    const fetchAllProgress = async () => {
      try {
        const response = await api.get(`/progress/${roadmapId}`);
        
        if (response.data && response.data.completedSteps) {
          const stepsArray = response.data.completedSteps;
          const stepsObject = {};
          
          stepsArray.forEach((id) => {
            stepsObject[id] = true;
          });
          
          setCompletedSteps(stepsObject);
        }
      } catch (error) {
        console.error("Error fetching global progress:", error);
      }
    };

    fetchAllProgress();
  }, [roadmapId]);

  const currentUser = {
    name: user?.name || "Student",
    email: user?.email || "Guest@gmail.com"
  };

  const currentPhase = useMemo(
    () => frontEndRoadmap.find((p) => p.phase === activePhase) ?? frontEndRoadmap[0],
    [activePhase]
  );

  const totalCompleted = allSteps.filter((s) => completedSteps[s.id]).length;
  const phaseCompleted = currentPhase.steps.filter((s) => completedSteps[s.id]).length;
  
  const isRoadmapComplete = totalSteps > 0 && totalCompleted === totalSteps;

  const openStepDetails = (step) => {
    setSelectedStep(step);
    setIsSidebarOpen(true);
  };

  const markStepAsComplete = async (stepId) => {
    try {
      setCompletedSteps((prev) => ({ ...prev, [stepId]: true }));
      setIsSidebarOpen(false);

      await api.patch(`/progress/${activePhase}`, {
        stepId,
        isDone: true
      });
    } catch (error) {
      console.error("Failed to save progress to server:", error);
    }
  };

  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [projectOneUrl, setProjectOneUrl] = useState("");
  const [projectTwoUrl, setProjectTwoUrl] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleFinalSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);

    const templateParams = {
      user_name: currentUser.name,
      user_email: currentUser.email,
      roadmap_title: ROADMAP_TITLE,
      submission_type: "FINAL GRADUATION (BOTH PROJECTS)",
      portfolio_5_phases_url: projectOneUrl,
      final_independent_url: projectTwoUrl,
    };

    try {
      await api.post("/submit-project", {
        Project_One_Url: templateParams.portfolio_5_phases_url,
        Project_Two_Url: templateParams.final_independent_url,
        email: templateParams.user_email,
        name: templateParams.user_name,
        roadmap_title: templateParams.roadmap_title,
      });
      console.log("Email request sent to backend successfully!");
      alert("🎉 CONGRATULATIONS! Both of your projects have been successfully submitted for graduation review.");
      setIsSubmitModalOpen(false);
    } catch (error) {
      console.error("Failed to send email request:", error);
      alert("Failed to submit graduation projects. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <NavBar />
      <div className="bg-[#0A0A0A] min-h-screen text-white font-sans">
        <div className="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Header Section */}
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <p className="text-[#39FF14] text-[10px] sm:text-xs font-mono tracking-widest mb-1 sm:mb-2">FRONT-END ROADMAP</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2 sm:mb-3 px-2">{ROADMAP_TITLE}</h1>
            <p className="text-[#BACCB0] text-xs sm:text-sm max-w-2xl mx-auto px-2">{currentPhase.target}</p>
          </div>

          {/* Overall Progress Bar */}
          <div className="mb-6 sm:mb-8 p-3 sm:p-4 bg-[#141414] border border-zinc-800 rounded-xl">
            <div className="flex justify-between text-[10px] sm:text-xs font-mono mb-2">
              <span className="text-[#BACCB0]">OVERALL PROGRESS</span>
              <span className="text-[#39FF14]">{totalCompleted}/{totalSteps} STEPS</span>
            </div>
            <div className="h-1.5 sm:h-2 bg-zinc-900 rounded-full overflow-hidden">
              <div className="h-full bg-[#39FF14] transition-all duration-500" style={{ width: `${(totalCompleted / totalSteps) * 100}%` }} />
            </div>
          </div>

          {/* Phase Tabs - horizontal scroll on mobile */}
          <div className="flex flex-nowrap gap-1.5 sm:gap-2 mb-6 sm:mb-8 justify-start sm:justify-center overflow-x-auto pb-1 -mx-4 sm:mx-0 px-4 sm:px-0 scrollbar-hide">
            {frontEndRoadmap.map((phase) => {
              const done = phase.steps.filter((s) => completedSteps[s.id]).length;
              const isActive = phase.phase === activePhase;
              return (
                <button
                  key={phase.phase}
                  onClick={() => setActivePhase(phase.phase)}
                  className={`shrink-0 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold rounded-lg border transition-all duration-300 ${
                    isActive ? "bg-[#39FF14] text-black border-[#39FF14]" : "bg-[#141414] text-[#BACCB0] border-zinc-800 hover:border-[#39FF14]/50"
                  }`}
                >
                  Phase {phase.phase} {done === phase.steps.length && phase.steps.length > 0 && <FiCheck className="inline ml-0.5 sm:ml-1" />}
                </button>
              );
            })}
          </div>

          <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#39FF14]/50 to-transparent mb-6 sm:mb-8 md:mb-10" />

          {/* Phase Title */}
          <h2 className="text-xl sm:text-2xl font-bold text-[#39FF14] mb-1 sm:mb-2 text-center px-2">
            Phase {currentPhase.phase}: {currentPhase.title}
          </h2>
          <p className="text-center text-[#BACCB0] text-xs sm:text-sm mb-6 sm:mb-8">
            Phase Progress: {phaseCompleted}/{currentPhase.steps.length} steps
          </p>

          {/* Step Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-10 sm:mb-12">
            {currentPhase.steps.map((step, index) => {
              const isCompleted = completedSteps[step.id];
              const prevStep = currentPhase.steps[index - 1];
              const isLocked = index > 0 && prevStep && !completedSteps[prevStep.id];

              return (
                <div key={step.id} className={`p-5 sm:p-6 md:p-7 rounded-2xl border transition-all duration-300 shadow-lg flex flex-col justify-between min-h-[180px] sm:min-h-[200px] md:min-h-[220px] ${
                  isLocked ? "bg-[#101010]/50 border-zinc-900 opacity-40 pointer-events-none select-none" : isCompleted ? "bg-[#141414] border-[#39FF14]/30" : "bg-[#141414] border-zinc-800 hover:border-[#39FF14]/50"
                }`}>
                  <div>
                    <div className="flex justify-between items-center mb-2 sm:mb-3">
                      <span className="text-[10px] font-mono text-zinc-500">{step.number} · {step.duration}</span>
                      {isCompleted && <FiCheck className="text-[#39FF14] text-lg sm:text-xl font-bold" />}
                      {isLocked && <FiLock className="text-zinc-600 text-sm" />}
                    </div>
                    <h3 className={`text-base sm:text-lg font-bold mb-1 sm:mb-2 ${isLocked ? "text-zinc-600" : isCompleted ? "text-zinc-500 line-through" : "text-white"}`}>{step.title}</h3>
                    <p className="text-xs sm:text-sm mb-2 text-gray-400">{step.resources.length} video resource{step.resources.length !== 1 ? "s" : ""}</p>
                  </div>
                  <button
                    disabled={isLocked}
                    className={`w-full font-bold py-2 px-3 sm:px-4 rounded-lg text-xs sm:text-sm transition-all duration-300 mt-2 sm:mt-3 ${
                      isLocked ? "bg-zinc-800 text-zinc-600 cursor-not-allowed" : "bg-[#39FF14] text-black cursor-pointer"
                    }`}
                    onClick={() => !isLocked && openStepDetails(step)}
                  >
                    {isLocked ? "Locked" : isCompleted ? "Review Lesson" : "Start"}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Phase Details Section */}
          {activePhase <= 5 && currentPhase.details && (
            <div className="bg-[#111] border border-zinc-800 p-4 sm:p-5 md:p-6 rounded-2xl mb-6 sm:mb-8 shadow-inner">
              <div className="flex items-center gap-2 text-[#00FFFF] font-bold text-xs sm:text-sm mb-2 sm:mb-3 uppercase tracking-wider">
                <FiInfo className="text-base sm:text-lg" />
                <span>Phase {currentPhase.phase} Portfolio Cumulative Updates</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 whitespace-pre-line leading-relaxed">
                {currentPhase.details}
              </p>
              <p className="text-[10px] sm:text-xs text-yellow-500/80 font-mono mt-3 sm:mt-4 italic">
                💡 Step-by-Step Guidance: Open your existing Portfolio project from previous phases, and add the features/tags detailed above to expand it dynamically!
              </p>
            </div>
          )}

          {/* Completion Section */}
          {isRoadmapComplete && (
            <div className="mt-10 sm:mt-12 md:mt-16 backdrop-blur-lg bg-[#00FFFF]/5 border border-[#00FFFF]/40 p-5 sm:p-6 md:p-8 text-center rounded-2xl shadow-2xl border-dashed">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#00FFFF] mb-2 sm:mb-3">🏆 ROADMAP 100% COMPLETED!</h2>
              <p className="text-[#BACCB0] max-w-xl mx-auto mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed px-2">
                Excellent work! You have finished all phases. Open the submission portal below to upload both: your 5-Phases Cumulative Portfolio, and your ultimate Independent Master Project.
              </p>
              <button
                onClick={() => setIsSubmitModalOpen(true)}
                className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 bg-[#00FFFF] text-black font-extrabold border border-[#00FFFF] transition duration-300 rounded-xl cursor-pointer hover:bg-black hover:text-[#00FFFF] text-sm sm:text-base"
              >
                Open Graduation Submission Portal
              </button>
            </div>
          )}
        </div>

        <RoadmapSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} stepData={selectedStep} onComplete={markStepAsComplete}/>
      </div>

      {/* Submit Modal - responsive */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 backdrop-blur-md bg-black/70">
          <div className="bg-[#141414] border border-zinc-800 p-4 sm:p-5 md:p-6 rounded-2xl max-w-md w-full shadow-2xl mx-2 sm:mx-0 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg sm:text-xl font-extrabold text-white mb-1">
              🏆 Final Course Graduation
            </h3>
            <p className="text-[10px] sm:text-xs text-gray-400 mb-4 sm:mb-5">
              Logged in as: <span className="text-[#00FFFF] break-all">{currentUser.name}</span>
            </p>

            <form onSubmit={handleFinalSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-[10px] sm:text-xs font-mono text-[#BACCB0] mb-1.5 sm:mb-2 uppercase tracking-wider">
                  1. Cumulative Portfolio Link (Phases 1-5)
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://github.com/your-username/cumulative-portfolio"
                  value={projectOneUrl}
                  onChange={(e) => setProjectOneUrl(e.target.value)}
                  className="w-full bg-[#0A0A0A] border border-zinc-800 focus:border-[#00FFFF] text-white rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] sm:text-xs font-mono text-[#BACCB0] mb-1.5 sm:mb-2 uppercase tracking-wider">
                  2. Final Independent Master Project Link
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://github.com/your-username/final-master-project"
                  value={projectTwoUrl}
                  onChange={(e) => setProjectTwoUrl(e.target.value)}
                  className="w-full bg-[#0A0A0A] border border-zinc-800 focus:border-[#00FFFF] text-white rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm outline-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-1 sm:pt-2">
                <button
                  type="button"
                  onClick={() => setIsSubmitModalOpen(false)}
                  className="w-full sm:flex-1 bg-zinc-900 border border-zinc-800 text-gray-400 py-2.5 rounded-xl text-xs sm:text-sm cursor-pointer transition hover:bg-zinc-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full sm:flex-1 bg-[#00FFFF] text-black font-extrabold py-2.5 rounded-xl text-xs sm:text-sm cursor-pointer transition hover:bg-[#00FFFF]/80 disabled:opacity-50"
                >
                  {isSending ? "Sending Both..." : "Submit Graduation"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Roadmapview;
