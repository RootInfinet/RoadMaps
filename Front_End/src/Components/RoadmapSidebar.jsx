import React from "react";
import { FiX, FiExternalLink } from "react-icons/fi";

function RoadmapSidebar({ isOpen, onClose, stepData, onComplete}) {
  if (!isOpen || !stepData) return null;

  const notes = stepData.notes || stepData.Notes || "";
  const notes2 = stepData.notes2 || "";
  const notes3 = stepData.notes3 || "";
  const notes4 = stepData.notes4 || "";
  const notes5 = stepData.notes5 || "";

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 w-full max-w-md bg-[#141414] border-l border-zinc-800 z-50 p-6 flex flex-col justify-between shadow-2xl max-h-screen overflow-y-auto z-100">
        <div>
          <div className="flex justify-between items-center pb-4 border-b border-zinc-900">
            <span className="text-xs font-mono text-[#39FF14]">
              {stepData.number} · {stepData.duration}
            </span>
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-extrabold text-white tracking-wide">
              {stepData.title}
            </h3>
            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
              {stepData.description}
            </p>

            {stepData.resources?.length > 0 && (
              <div className="mt-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Recommended Resources
                </h4>
                <div className="mt-3 space-y-2">
                  {stepData.resources.map((res, index) => (
                    <a
                      key={index}
                      href={res.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-[#0A0A0A] rounded-xl border border-zinc-800/60 hover:border-[#39FF14]/40 hover:bg-zinc-900/50 transition-all text-sm group"
                    >
                      <span className="text-zinc-300 group-hover:text-white">
                        {res.name}
                      </span>
                      <FiExternalLink className="text-zinc-500 group-hover:text-[#39FF14] transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {notes && (
  <div className="mt-6 flex flex-col gap-4">
    <div className="bg-[#141414]/40 backdrop-blur-sm rounded-xl border-l-4 border-[#39FF14] bg-gradient-to-r from-[#39FF14]/5 to-transparent p-5">
      <h4 className="text-xs font-bold uppercase tracking-wider text-[#39FF14] mb-3 flex items-center gap-1.5">
        ⚠️ Important Notes
      </h4>
      <p className="text-sm text-zinc-300 leading-relaxed whitespace-pre-line">
        {notes}
      </p>
    </div>

    {notes2 && (
      <div className="bg-[#141414]/40 backdrop-blur-sm rounded-xl border-l-4 border-amber-500 bg-gradient-to-r from-amber-500/5 to-transparent p-5">
        <h4 className="text-xs font-bold uppercase tracking-wider text-amber-500 mb-3 flex items-center gap-1.5">
          🔒 Security Alert
        </h4>
        <p className="text-sm text-zinc-300 leading-relaxed whitespace-pre-line">
          {notes2}
        </p>
      </div>
    )}
    {notes3 && (
      <div className="bg-[#141414]/40 backdrop-blur-sm rounded-xl border-l-4 border-amber-500 bg-gradient-to-r from-amber-500/5 to-transparent p-5">
        <h4 className="text-xs font-bold uppercase tracking-wider text-amber-500 mb-3 flex items-center gap-1.5">
          🔒 Security Alert
        </h4>
        <p className="text-sm text-zinc-300 leading-relaxed whitespace-pre-line">
          {notes3}
        </p>
      </div>
    )}
    {notes4 && (
      <div className="bg-[#141414]/40 backdrop-blur-sm rounded-xl border-l-4 border-amber-500 bg-gradient-to-r from-amber-500/5 to-transparent p-5">
        <h4 className="text-xs font-bold uppercase tracking-wider text-amber-500 mb-3 flex items-center gap-1.5">
          🔒 Security Alert
        </h4>
        <p className="text-sm text-zinc-300 leading-relaxed whitespace-pre-line">
          {notes3}
        </p>
      </div>
    )}{notes5 && (
      <div className="bg-[#141414]/40 backdrop-blur-sm rounded-xl border-l-4 border-amber-500 bg-gradient-to-r from-amber-500/5 to-transparent p-5">
        <h4 className="text-xs font-bold uppercase tracking-wider text-amber-500 mb-3 flex items-center gap-1.5">
          🔒 Security Alert
        </h4>
        <p className="text-sm text-zinc-300 leading-relaxed whitespace-pre-line">
          {notes3}
        </p>
      </div>
    )}
  </div>
)}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-900">
          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">
            Practical Assignment
          </h4>
          <p className="text-xs text-zinc-400 leading-relaxed mb-4">
            {stepData.assignment}
          </p>

          <button
            className="w-full py-3.5 bg-[#39FF14] text-black font-bold text-sm rounded-xl hover:bg-[#32e612] transition-colors shadow-[0_0_20px_rgba(57,255,20,0.15)] mb-3"
            onClick={() => onComplete?.(stepData.id)}
          >
            Mark as Complete
          </button>
        </div>
      </div>
    </>
  );
}

export default RoadmapSidebar;
